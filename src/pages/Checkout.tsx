import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Input validation schema
const checkoutSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone must be exactly 10 digits"),
  address1: z.string().trim().min(5, "Address must be at least 5 characters").max(200, "Address must be less than 200 characters"),
  address2: z.string().max(200, "Address must be less than 200 characters").optional(),
  city: z.string().trim().min(2, "City must be at least 2 characters").max(100, "City must be less than 100 characters"),
  state: z.string().trim().min(2, "State must be at least 2 characters").max(100, "State must be less than 100 characters"),
  pincode: z.string().regex(/^[0-9]{6}$/, "Pincode must be exactly 6 digits"),
});

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Checkout = () => {
  const { items, cartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Form state
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  useEffect(() => {
    if (items.length === 0) {
      navigate("/cart");
    }

    // Load Razorpay script
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [items, navigate]);

  const tax = cartTotal * 0.18; // 18% GST
  const shippingCharge = cartTotal > 5000 ? 0 : 100;
  const total = cartTotal + tax + shippingCharge;

  const handlePayment = async () => {
    // Validate all inputs using zod schema
    const validationResult = checkoutSchema.safeParse({
      fullName,
      email,
      phone,
      address1,
      address2: address2 || undefined,
      city,
      state,
      pincode,
    });

    if (!validationResult.success) {
      const errors = validationResult.error.errors.map(err => err.message).join(", ");
      toast.error(errors);
      return;
    }

    setLoading(true);

    try {
      // Create Razorpay order via edge function
      const { data: orderData, error: orderError } = await supabase.functions.invoke(
        "create-razorpay-order",
        {
          body: {
            amount: Math.round(total * 100), // Convert to paise
            currency: "INR",
          },
        }
      );

      if (orderError) throw orderError;

      const options = {
        key: import.meta.env.VITE_SUPABASE_URL?.includes("lovableproject")
          ? "rzp_test_key"
          : await getRazorpayKey(),
        amount: orderData.amount,
        currency: orderData.currency,
        name: "The Fashion Edit.in Jewelry",
        description: "Purchase from our collection",
        order_id: orderData.id,
        handler: async function (response: any) {
          await verifyPayment(response, orderData.id);
        },
        prefill: {
          name: fullName,
          email: email,
          contact: phone,
        },
        theme: {
          color: "#B98856",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error: any) {
      console.error("Payment error:", error);
      toast.error("Failed to initiate payment");
    } finally {
      setLoading(false);
    }
  };

  const getRazorpayKey = async () => {
    // In production, fetch from edge function
    return "rzp_test_key";
  };

  const verifyPayment = async (response: any, razorpayOrderId: string) => {
    try {
      // Verify payment via edge function
      const { data: verifyData, error: verifyError } = await supabase.functions.invoke(
        "verify-razorpay-payment",
        {
          body: {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          },
        }
      );

      if (verifyError) throw verifyError;

      // Create order in database
      const orderNumber = `ORD-${Date.now()}`;
      const { data: order, error: orderDbError } = await supabase
        .from("orders")
        .insert({
          order_number: orderNumber,
          user_id: user?.id || null,
          guest_email: user ? null : email,
          status: "confirmed",
          payment_status: "paid",
          payment_method: "razorpay",
          razorpay_order_id: razorpayOrderId,
          razorpay_payment_id: response.razorpay_payment_id,
          customer_name: fullName,
          customer_email: email,
          customer_phone: phone,
          shipping_address_line1: address1,
          shipping_address_line2: address2,
          shipping_city: city,
          shipping_state: state,
          shipping_pincode: pincode,
          subtotal: cartTotal,
          tax: tax,
          shipping_charge: shippingCharge,
          total: total,
        })
        .select()
        .single();

      if (orderDbError) throw orderDbError;

      // Create order items
      const orderItems = items.map((item) => ({
        order_id: order.id,
        product_id: item.productId,
        product_name: item.name,
        variant_id: item.variantId,
        variant_attributes: item.variantAttributes,
        quantity: item.quantity,
        unit_price: item.price,
        total_price: item.price * item.quantity,
      }));

      const { error: itemsError } = await supabase.from("order_items").insert(orderItems);

      if (itemsError) throw itemsError;

      // Send confirmation email
      await supabase.functions.invoke("send-order-confirmation", {
        body: {
          order_id: order.id,
          email: email,
        },
      });

      clearCart();
      toast.success("Order placed successfully!");
      navigate(`/order-success/${order.id}`);
    } catch (error: any) {
      console.error("Order creation error:", error);
      toast.error("Failed to create order");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address1">Address Line 1 *</Label>
                    <Input
                      id="address1"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="address2">Address Line 2</Label>
                    <Input
                      id="address2"
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>
                        {item.name} x {item.quantity}
                      </span>
                      <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                    </div>
                  ))}

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>₹{cartTotal.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax (GST 18%)</span>
                      <span>₹{tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>{shippingCharge === 0 ? "FREE" : `₹${shippingCharge}`}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg border-t pt-2">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button className="w-full" size="lg" onClick={handlePayment} disabled={loading}>
                    {loading ? "Processing..." : "Place Order"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;

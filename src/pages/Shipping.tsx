import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Package, Clock } from "lucide-react";

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8 text-center">Shipping & Delivery</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On orders above ₹5,000</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-sm text-muted-foreground">5-7 business days</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Package className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Secure Packaging</h3>
                  <p className="text-sm text-muted-foreground">Premium gift boxes</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Delivery Information</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We ship to all major cities across India. All orders are processed within 1-2 business days. 
                    You will receive a tracking number via email once your order has been shipped.
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Shipping Charges</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Free shipping on orders above ₹5,000</li>
                    <li>• Orders below ₹5,000: ₹150 shipping fee</li>
                    <li>• Express delivery available for an additional charge</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3">Delivery Time</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Metro cities: 3-5 business days</li>
                    <li>• Other cities: 5-7 business days</li>
                    <li>• Remote areas: 7-10 business days</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3">International Shipping</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We currently ship within India only. International shipping will be available soon.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;

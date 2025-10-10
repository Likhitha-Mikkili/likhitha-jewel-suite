import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Cart = () => {
  // TODO: Implement cart functionality with state management

  const isEmpty = true; // Placeholder

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-heading text-4xl font-bold mb-8">Shopping Cart</h1>

          {isEmpty ? (
            <div className="text-center py-16">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
              <h2 className="font-heading text-2xl font-semibold mb-4">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Discover our beautiful collection and find your perfect piece
              </p>
              <Link to="/collections">
                <Button size="lg">Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {/* TODO: Map through cart items */}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-lg p-6 shadow-soft sticky top-24">
                  <h2 className="font-heading text-2xl font-semibold mb-6">
                    Order Summary
                  </h2>
                  {/* TODO: Add summary details */}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;

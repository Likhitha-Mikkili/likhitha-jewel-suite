import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowRight, Shield, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

const Index = () => {
  const featuredProducts = products.filter((p) => p.tags.includes("bestseller")).slice(0, 4);
  const newArrivals = products.filter((p) => p.tags.includes("new")).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroBanner}
              alt="Likhitha Jewelry Collection"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal/60 to-charcoal/20" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground mb-6">
              Timeless Elegance,
              <br />
              <span className="text-gradient-gold">Handcrafted with Love</span>
            </h1>
            <p className="text-lg md:text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
              Discover exquisite jewelry pieces that celebrate life's precious moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collections">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-gold">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground/10"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-4">
                <Shield className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-heading font-semibold">Certified Authentic</h3>
                  <p className="text-sm text-muted-foreground">100% genuine materials</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Truck className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-heading font-semibold">Free Shipping</h3>
                  <p className="text-sm text-muted-foreground">On orders above ₹5,000</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Award className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-heading font-semibold">Lifetime Warranty</h3>
                  <p className="text-sm text-muted-foreground">On all gold jewelry</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bestsellers */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                Bestsellers
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our most loved pieces, handpicked by customers like you
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.images[0]}
                  category={product.category}
                />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/collections">
                <Button size="lg" variant="outline">
                  View All
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* New Arrivals */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
                New Arrivals
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Fresh designs to elevate your jewelry collection
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {newArrivals.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.images[0]}
                  category={product.category}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Join Our Journey
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Subscribe to receive exclusive offers, jewelry care tips, and be the first to know about new collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-primary-foreground text-foreground"
              />
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

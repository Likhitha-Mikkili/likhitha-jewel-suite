import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useParams, Link } from "react-router-dom";
import { Heart, ShoppingCart, Truck, Shield, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);

  const [selectedVariant, setSelectedVariant] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">Product Not Found</h1>
            <Link to="/collections">
              <Button>Back to Collections</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentVariant = product.variants[selectedVariant];

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/collections"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-smooth mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Collections
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted shadow-medium">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                  {product.name}
                </h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    ₹{currentVariant.price.toLocaleString()}
                  </span>
                  {product.compareAtPrice && (
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.compareAtPrice.toLocaleString()}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {product.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="prose prose-sm">
                <p className="text-foreground/80">{product.description}</p>
              </div>

              {/* Variants */}
              {product.variants.length > 1 && (
                <div>
                  <h3 className="font-semibold mb-3">Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.variants.map((variant, index) => (
                      <Button
                        key={variant.id}
                        variant={selectedVariant === index ? "default" : "outline"}
                        onClick={() => setSelectedVariant(index)}
                      >
                        {variant.attributes.metal || variant.attributes.size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* SKU and Stock */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>SKU: {currentVariant.sku}</p>
                <p className="flex items-center gap-2">
                  {currentVariant.inventory > 0 ? (
                    <>
                      <span className="h-2 w-2 bg-green-500 rounded-full" />
                      In Stock ({currentVariant.inventory} available)
                    </>
                  ) : (
                    <>
                      <span className="h-2 w-2 bg-red-500 rounded-full" />
                      Out of Stock
                    </>
                  )}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={handleAddToCart}
                  disabled={currentVariant.inventory === 0}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Info Cards */}
              <div className="space-y-4 pt-6 border-t">
                <div className="flex items-start gap-4">
                  <Truck className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Free Shipping</h4>
                    <p className="text-sm text-muted-foreground">
                      Free delivery on orders above ₹5,000
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Lifetime Warranty</h4>
                    <p className="text-sm text-muted-foreground">
                      All gold jewelry comes with a lifetime warranty
                    </p>
                  </div>
                </div>
              </div>

              {/* Care Instructions */}
              <div className="pt-6 border-t">
                <h3 className="font-heading font-semibold text-lg mb-3">Care Instructions</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Store in a cool, dry place away from direct sunlight</li>
                  <li>• Clean with a soft cloth after each use</li>
                  <li>• Avoid contact with chemicals, perfumes, and water</li>
                  <li>• Remove before swimming or exercising</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

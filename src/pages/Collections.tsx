import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

const Collections = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || "all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [priceRange, setPriceRange] = useState<string>("all");

  // Filter products
  let filteredProducts = [...products];

  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  if (priceRange !== "all") {
    filteredProducts = filteredProducts.filter((p) => {
      if (priceRange === "under5k") return p.price < 5000;
      if (priceRange === "5k-10k") return p.price >= 5000 && p.price < 10000;
      if (priceRange === "above10k") return p.price >= 10000;
      return true;
    });
  }

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Header */}
        <section className="bg-muted/30 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Our Collections
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Explore our carefully curated selection of handcrafted jewelry
            </p>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                >
                  All
                </Button>
                <Button
                  variant={selectedCategory === "necklaces" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("necklaces")}
                >
                  Necklaces
                </Button>
                <Button
                  variant={selectedCategory === "rings" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("rings")}
                >
                  Rings
                </Button>
                <Button
                  variant={selectedCategory === "earrings" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("earrings")}
                >
                  Earrings
                </Button>
                <Button
                  variant={selectedCategory === "bracelets" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("bracelets")}
                >
                  Bracelets
                </Button>
              </div>

              <div className="flex gap-4">
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-[180px]">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under5k">Under ₹5,000</SelectItem>
                    <SelectItem value="5k-10k">₹5,000 - ₹10,000</SelectItem>
                    <SelectItem value="above10k">Above ₹10,000</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="name">Name: A to Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
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

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No products found. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Collections;

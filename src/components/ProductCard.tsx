import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

export const ProductCard = ({ id, name, price, image, category }: ProductCardProps) => {
  return (
    <Link to={`/product/${id}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-card shadow-soft hover:shadow-gold transition-all duration-300">
        {/* Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background transition-smooth opacity-0 group-hover:opacity-100"
          onClick={(e) => {
            e.preventDefault();
            // TODO: Add to wishlist functionality
          }}
        >
          <Heart className="h-5 w-5" />
        </Button>

        {/* Content */}
        <div className="p-4 space-y-2">
          <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
            {category}
          </div>
          <h3 className="font-heading font-medium text-lg text-foreground group-hover:text-primary transition-smooth">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-xl font-semibold text-primary">₹{price.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

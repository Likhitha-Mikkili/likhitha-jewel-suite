import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 transition-smooth hover:opacity-80">
            <img src={logo} alt="Likhitha Jewelry" className="h-12 w-auto" />
            <span className="font-heading text-xl font-semibold text-foreground hidden sm:inline">
              Likhitha
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/collections" className="text-foreground hover:text-primary transition-smooth font-medium">
              Collections
            </Link>
            <Link to="/collections?category=necklaces" className="text-foreground hover:text-primary transition-smooth font-medium">
              Necklaces
            </Link>
            <Link to="/collections?category=rings" className="text-foreground hover:text-primary transition-smooth font-medium">
              Rings
            </Link>
            <Link to="/collections?category=earrings" className="text-foreground hover:text-primary transition-smooth font-medium">
              Earrings
            </Link>
            <Link to="/collections?category=bracelets" className="text-foreground hover:text-primary transition-smooth font-medium">
              Bracelets
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link
              to="/collections"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Collections
            </Link>
            <Link
              to="/collections?category=necklaces"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Necklaces
            </Link>
            <Link
              to="/collections?category=rings"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Rings
            </Link>
            <Link
              to="/collections?category=earrings"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Earrings
            </Link>
            <Link
              to="/collections?category=bracelets"
              className="block py-2 text-foreground hover:text-primary transition-smooth font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Bracelets
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

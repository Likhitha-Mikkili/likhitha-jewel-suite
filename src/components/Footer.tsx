import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="Likhitha Jewelry" className="h-16 w-auto" />
            <p className="text-sm text-secondary-foreground/80">
              Exquisite handcrafted jewelry with timeless elegance. Every piece tells a story.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-lg">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/collections" className="hover:text-primary transition-smooth">
                  All Collections
                </Link>
              </li>
              <li>
                <Link to="/collections?category=necklaces" className="hover:text-primary transition-smooth">
                  Necklaces
                </Link>
              </li>
              <li>
                <Link to="/collections?category=rings" className="hover:text-primary transition-smooth">
                  Rings
                </Link>
              </li>
              <li>
                <Link to="/collections?category=earrings" className="hover:text-primary transition-smooth">
                  Earrings
                </Link>
              </li>
              <li>
                <Link to="/collections?category=bracelets" className="hover:text-primary transition-smooth">
                  Bracelets
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-lg">Customer Care</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="hover:text-primary transition-smooth">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-primary transition-smooth">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/returns" className="hover:text-primary transition-smooth">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/care" className="hover:text-primary transition-smooth">
                  Jewelry Care
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-smooth">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-lg">About</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="hover:text-primary transition-smooth">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/craftsmanship" className="hover:text-primary transition-smooth">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="hover:text-primary transition-smooth">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary transition-smooth">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary transition-smooth">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Likhitha Jewelry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

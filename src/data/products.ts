import productPendant from "@/assets/product-pendant.jpg";
import productRing from "@/assets/product-ring.jpg";
import productEarrings from "@/assets/product-earrings.jpg";
import productBracelet from "@/assets/product-bracelet.jpg";

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  category: string;
  images: string[];
  variants: ProductVariant[];
  tags: string[];
  inStock: boolean;
}

export interface ProductVariant {
  id: string;
  sku: string;
  price: number;
  inventory: number;
  attributes: {
    metal?: string;
    size?: string;
    weight?: string;
  };
}

export const products: Product[] = [
  {
    id: "1",
    name: "Classic Bloom Pendant",
    slug: "classic-bloom-pendant",
    description: "An exquisite 18K gold pendant featuring a delicate citrine bloom design with diamond accents. Handcrafted with precision and care, this piece captures the essence of timeless elegance.",
    price: 3999,
    compareAtPrice: 4999,
    category: "Necklaces",
    images: [productPendant],
    variants: [
      {
        id: "1-18k",
        sku: "LJ-PEND-001-18K",
        price: 3999,
        inventory: 10,
        attributes: { metal: "18K Gold", weight: "2.5g" },
      },
      {
        id: "1-22k",
        sku: "LJ-PEND-001-22K",
        price: 4999,
        inventory: 5,
        attributes: { metal: "22K Gold", weight: "2.5g" },
      },
    ],
    tags: ["new", "bestseller"],
    inStock: true,
  },
  {
    id: "2",
    name: "Rose Halo Diamond Ring",
    slug: "rose-halo-diamond-ring",
    description: "A stunning rose gold engagement ring featuring a brilliant center diamond surrounded by a delicate halo. The intricate band adds vintage charm to this modern classic.",
    price: 12999,
    compareAtPrice: 15999,
    category: "Rings",
    images: [productRing],
    variants: [
      {
        id: "2-6",
        sku: "LJ-RING-002-6",
        price: 12999,
        inventory: 3,
        attributes: { metal: "Rose Gold", size: "6" },
      },
      {
        id: "2-7",
        sku: "LJ-RING-002-7",
        price: 12999,
        inventory: 2,
        attributes: { metal: "Rose Gold", size: "7" },
      },
    ],
    tags: ["bestseller"],
    inStock: true,
  },
  {
    id: "3",
    name: "Elegant Gold Hoops",
    slug: "elegant-gold-hoops",
    description: "Timeless 18K gold hoop earrings with a smooth, polished finish. Perfect for everyday elegance or special occasions. Comfortable and secure closure.",
    price: 2499,
    category: "Earrings",
    images: [productEarrings],
    variants: [
      {
        id: "3-18k",
        sku: "LJ-EAR-003-18K",
        price: 2499,
        inventory: 15,
        attributes: { metal: "18K Gold", weight: "3.2g" },
      },
    ],
    tags: ["new"],
    inStock: true,
  },
  {
    id: "4",
    name: "Gemstone Tennis Bracelet",
    slug: "gemstone-tennis-bracelet",
    description: "A luxurious tennis bracelet featuring emerald-cut white topaz stones set in 18K gold. The perfect blend of sophistication and sparkle for any occasion.",
    price: 8999,
    compareAtPrice: 10999,
    category: "Bracelets",
    images: [productBracelet],
    variants: [
      {
        id: "4-7",
        sku: "LJ-BRAC-004-7",
        price: 8999,
        inventory: 8,
        attributes: { metal: "18K Gold", size: "7 inches" },
      },
      {
        id: "4-8",
        sku: "LJ-BRAC-004-8",
        price: 8999,
        inventory: 6,
        attributes: { metal: "18K Gold", size: "8 inches" },
      },
    ],
    tags: ["bestseller"],
    inStock: true,
  },
  {
    id: "5",
    name: "Delicate Chain Necklace",
    slug: "delicate-chain-necklace",
    description: "A versatile 22K gold chain necklace perfect for layering or wearing alone. Features a secure clasp and adjustable length.",
    price: 5499,
    category: "Necklaces",
    images: [productPendant],
    variants: [
      {
        id: "5-22k",
        sku: "LJ-NECK-005-22K",
        price: 5499,
        inventory: 20,
        attributes: { metal: "22K Gold", weight: "4.5g" },
      },
    ],
    tags: ["new"],
    inStock: true,
  },
  {
    id: "6",
    name: "Vintage Statement Ring",
    slug: "vintage-statement-ring",
    description: "Bold and beautiful vintage-inspired statement ring with intricate detailing and gemstone accents.",
    price: 9999,
    category: "Rings",
    images: [productRing],
    variants: [
      {
        id: "6-6",
        sku: "LJ-RING-006-6",
        price: 9999,
        inventory: 4,
        attributes: { metal: "18K Gold", size: "6" },
      },
    ],
    tags: [],
    inStock: true,
  },
];

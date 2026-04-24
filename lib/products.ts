export interface ProductSize {
  /** Stable id — used as part of the cart line key */
  id: string;
  /** Display name — "Mini" / "Medium" / "Large" */
  label: string;
  /** Display weight / volume — "0.75 oz" or "750 ml" */
  weight: string;
  /** Price in dollars for this size */
  price: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  shortDescription: string;
  description: string;
  origin: string;
  weight: string;
  steepTime: string;
  temperature: string;
  image: string;
  /**
   * Optional extra bottle photos shown as a thumbnail strip on the
   * product detail page. Drop the actual files into /public/images/
   * using the paths listed here.
   */
  gallery?: string[];
  /**
   * Optional size variants. If present, the product page shows a size
   * picker and the price/weight update based on the selection. The
   * top-level `price` / `weight` still act as the default (first size).
   */
  sizes?: ProductSize[];
  tag: string;
  accentColor: string;
}

export const products: Product[] = [
  {
    id: "prod_001",
    name: "Choublak Tea",
    slug: "choublak-tea",
    price: 3.00,
    shortDescription: "A vibrant ruby-red hibiscus brew — naturally sweet, refreshingly tart.",
    description:
      "Crafted from the leaves of the Hibiscus sabdariffa, Choublak Tea is our celebration of tradition in every bottle. A vibrant ruby-red hue and a refreshingly tart taste dance on the palate, finishing with a naturally sweet warmth. Rich in antioxidants and vitamin C, this soothing infusion is the perfect companion for quiet mornings, daily rituals, and every moment worth savouring.",
    origin: "Hibiscus Sabdariffa",
    weight: "16.9 oz",
    steepTime: "Ready to drink",
    temperature: "Best chilled",
    image: "/images/A_sweet_thankyou.png",
    gallery: [
      "/images/A_sweet_thankyou-2.png",
      "/images/A_sweet_thankyou-3.png",
    ],
    tag: "Bestseller",
    accentColor: "#b23a2a",
  },
  {
    id: "prod_002",
    name: "Kremas",
    slug: "kremas",
    price: 3.50,
    shortDescription: "A bold, velvety hibiscus infusion — available in three sizes.",
    description:
      "Kremas is a bolder, richer take on our Hibiscus sabdariffa leaf — a velvety ruby-red infusion that carries centuries of tradition into every sip. Tart, floral and lingering, it is a tea made for gatherings, gourmet moments, and the kind of slow afternoons heritage is built on. Rich in antioxidants and vitamin C, Kremas is as nourishing as it is delightful — equally stunning piping hot or poured over ice.",
    origin: "Hibiscus Sabdariffa",
    weight: "0.75 oz",
    steepTime: "Ready to drink",
    temperature: "Best chilled",
    image: "/images/Kremas.png",
    gallery: [
      "/images/Kremas-2.png",
      "/images/Kremas-3.png",
      "/images/Kremas-4.png",
    ],
    sizes: [
      { id: "mini",   label: "Mini",   weight: "0.75 oz", price: 3.50 },
      { id: "medium", label: "Medium", weight: "16.9 oz", price: 20.00 },
      { id: "large",  label: "Large",  weight: "750 ml",  price: 40.00 },
    ],
    tag: "New",
    accentColor: "#8a2020",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

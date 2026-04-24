import { Product } from "./products";

/**
 * A `Package` is a curated bundle of bottles. It satisfies the same
 * `Product` interface so it flows through the cart unchanged, but it
 * also carries a `contents` list describing what's inside.
 */
export interface Package extends Product {
  contents: string[];
}

export const packages: Package[] = [
  {
    id: "pkg_001",
    name: "Package 1",
    slug: "package-1",
    price: 79.99,
    shortDescription:
      "Our biggest bundle — one Large Kremas, two Choublak Tea bottles, and two Mini Kremas.",
    description:
      "Package 1 is our most generous bundle — designed for sharing, gifting, or stocking your fridge with the full Choublak experience. Pour the velvety Large Kremas at the centre of any gathering, sip a chilled Choublak Tea on a warm afternoon, and tuck the Mini Kremas in your bag for a ruby-red moment on the go.",
    origin: "Choublak Bundle",
    weight: "Bundle of 5",
    steepTime: "Ready to drink",
    temperature: "Best chilled",
    image: "/images/package1.png",
    gallery: [
      "/images/package1-2.png",
      "/images/package1-3.png",
      "/images/package1-4.png",
      "/images/package1-5.png",
    ],
    contents: [
      "1 × Kremas Large (750 ml)",
      "2 × Choublak Tea (16.9 oz)",
      "2 × Kremas Mini (0.75 oz)",
    ],
    tag: "Best Value",
    accentColor: "#5a9452",
  },
  {
    id: "pkg_002",
    name: "Package 2",
    slug: "package-2",
    price: 59.99,
    shortDescription:
      "A balanced bundle — Medium Kremas, two Choublak Tea bottles, and two Mini Kremas.",
    description:
      "Package 2 is a beautifully balanced bundle for the everyday Choublak ritual. The Medium Kremas anchors the set, two chilled Choublak Tea bottles are ready for whenever the mood strikes, and the two Mini Kremas slip easily into a lunchbox, a desk drawer, or a guest's hand.",
    origin: "Choublak Bundle",
    weight: "Bundle of 5",
    steepTime: "Ready to drink",
    temperature: "Best chilled",
    image: "/images/package2.png",
    gallery: [
      "/images/package2-2.png",
      "/images/package2-3.png",
      "/images/package2-4.png",
      "/images/package2-5.png",
    ],
    contents: [
      "1 × Kremas Medium (16.9 oz)",
      "2 × Choublak Tea (16.9 oz)",
      "2 × Kremas Mini (0.75 oz)",
    ],
    tag: "Bundle",
    accentColor: "#b23a2a",
  },
];

export function getPackageBySlug(slug: string): Package | undefined {
  return packages.find((p) => p.slug === slug);
}

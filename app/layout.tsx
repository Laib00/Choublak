import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCart from "@/components/FloatingCart";

export const metadata: Metadata = {
  title: "Choublak — Pure Taste, Real Tea",
  description: "Hand-sourced teas from the world's finest gardens. Discover oolong, matcha, and more.",
  keywords: "tea, premium tea, oolong, matcha, organic tea, Choublak",
  openGraph: {
    title: "Choublak — Pure Taste, Real Tea",
    description: "Hand-sourced teas from the world's finest gardens.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream-50 text-bark-900 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCart />
      </body>
    </html>
  );
}

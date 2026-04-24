import type { Metadata } from "next";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout — Choublak Tea",
};

export default function CheckoutPage() {
  return <CheckoutClient />;
}

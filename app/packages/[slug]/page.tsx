import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPackageBySlug, packages } from "@/lib/packages";
import PackageDetailClient from "./PackageDetailClient";

export async function generateStaticParams() {
  return packages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) return { title: "Package not found — Choublak" };
  return {
    title: `${pkg.name} — Choublak`,
    description: pkg.shortDescription,
  };
}

export default function PackagePage({
  params,
}: {
  params: { slug: string };
}) {
  const pkg = getPackageBySlug(params.slug);
  if (!pkg) notFound();
  return <PackageDetailClient pkg={pkg} />;
}

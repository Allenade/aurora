import ProductsPage from "@/components/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Aurora products — AI and robotics",
};

export default function Products() {
  return <ProductsPage />;
}

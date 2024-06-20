import ProductGrid from "@/components/ui/ProductGrid";
import { getProducts } from "@/server/db/queries";
import Hero from "@/components/home/Hero";
export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Hero />
      <ProductGrid text="New" products={products} />
    </div>
  );
}

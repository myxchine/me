import ProductGrid from "@/components/ui/ProductGrid";
import { getProducts } from "@/server/db/queries";
export const dynamic = "force-dynamic";

export default async function Store() {
  const products = await getProducts();

  return (
    <div>
      <ProductGrid text="Store" products={products} />
    </div>
  );
}

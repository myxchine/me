import { getProduct } from "@/server/db/queries";
import ProductCard from "@/components/ui/ProductCard";
import { Product } from "@/types/product";
import AddToCartButton from "@/components/ui/AddToCartButton";
export const dynamic = "force-dynamic";

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product: Product | null = await getProduct(params.slug);

  if (!product) {
    return (
      <div className="max-w-xl mx-auto px-4 py-4">
        <h1 className="body-inter mt-8 text-2xl">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-8 py-8">
      <ProductCard product={product} />
      <AddToCartButton product={product} />
    </div>
  );
}

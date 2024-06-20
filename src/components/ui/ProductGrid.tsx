"use server";

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductGridProps {
  products: Product[];
  text: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, text }) => {
  return (
    <>
      <div className="p-8 max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold leading-8 tracking-tight text-gray-900">
          {text}
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  max-w-5xl mx-auto">
          {products.map((product, index) => (
            <div key={product.id} className="">
              <Link href={`/home/store/product/${product.slug}`}>
                <div>
                  <Image
                    width={300}
                    height={500}
                    src={product.image[0]}
                    alt={product.name}
                    quality={66}
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="w-full"
                  />
                  <div className="my-4 text-sm font-medium text-gray-900">
                    <p>{product.name}</p>

                    <p>{product.price} EUR</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;

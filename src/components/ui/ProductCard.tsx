"use server";

import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <section>
      <Image
        src={product.image[0]}
        alt={product.name}
        quality={66}
        width={300}
        height={500}
        className="mb-4 w-full object-cover border"
        priority
      />
      <div>
        <h1 className="body-inter mt-8 text-2xl">{product.name}</h1>
        <p className="body-inter text-black text-opacity-80 text-sm mt-4">
          {product.description}
        </p>
      </div>
      <p className="text-l body-inter mt-4">{product.price.toFixed(2)} EUR</p>
    </section>
  );
};

export default ProductCard;

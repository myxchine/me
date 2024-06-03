"use client";

import Image from "next/image";
import { getProduct } from "@/server/queries";
import { Product } from "@/server/interface";
import AddToCart from "@/components/AddToCart";
import { useEffect, useState } from "react";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productResponse = await getProduct(params.slug);

        if (productResponse.error) {
          setError("Error fetching product. Please try again later.");
          console.error("Error fetching product:", productResponse.error);
          return;
        }

        const fetchedProduct: Product | null = productResponse.data[0] || null;

        if (!fetchedProduct) {
          setError("Product not found");
          return;
        }

        setProduct(fetchedProduct);
      } catch (error) {
        setError("Error fetching product. Please try again later.");
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [params.slug]);

  const handleAddToCart = async (product: Product) => {
    console.log("Adding product to cart:", product);

    try {
      const response = AddToCart(product);
      console.log(response);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return (
      <main className="max-w-xl mx-auto px-4 py-8">
        <div className="px-4 py-8">
          <div className="mb-4 h-[350px] bg-black bg-opacity-10 animate-pulse"></div>

          <div className="h-[32px] bg-black bg-opacity-10 animate-pulse mt-8"></div>

          <div className="h-[24px] bg-black bg-opacity-10 animate-pulse w-[200px]  mt-4"></div>

          <div className="h-[58px] mt-6 bg-black bg-opacity-10 animate-pulse w-full"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-8">
      <div className="px-4 py-8">
        <Image
          src={product.image}
          alt={product.name}
          quality={50}
          width={200}
          height={200}
          className="mb-4 h-[350px] md:h-[500px] w-full object-cover border"
          priority
          style={{
            objectFit: "cover",
          }}
        />
        <h1 className="body-inter mt-8 text-2xl uppercase">{product.name}</h1>

        <p className="text-l body-inter mt-4">{product.price.toFixed(2)} EUR</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="body-inter text mt-6 w-full border border-black bg-black p-4 text-white"
        >
          ADD TO CART
        </button>
      </div>
    </main>
  );
}

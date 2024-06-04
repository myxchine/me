"use client";

import Image from "next/image";
import { getProduct } from "@/server/queries";
import { Product } from "@/server/interface";
import AddToCart from "@/components/AddToCart";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

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

      router.push("/home/cart");
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return (
      <main className="max-w-xl mx-auto px-4 py-4">
        <Link href="/home/store">
          <button className="flex items-center pl-4">
            <IoArrowBackOutline className="text-2xl" />
          </button>
        </Link>
        <div className="px-4 py-8">
          <div className="mb-4 h-[450px] bg-black bg-opacity-30 animate-pulse"></div>

          <div className="h-[32px] bg-black bg-opacity-20 animate-pulse mt-8"></div>
          <div className="h-[24px] bg-black bg-opacity-10 animate-pulse w-[300px] "></div>

          <div className="h-[24px] bg-black bg-opacity-10 animate-pulse w-[200px]  mt-4"></div>

          <div className="h-[58px] mt-6 bg-black bg-opacity-20 animate-pulse w-full"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-xl mx-auto px-4 py-4">
      <Link href="/home/store">
        <button className="flex items-center pl-4">
          <IoArrowBackOutline className="text-2xl" />
        </button>
      </Link>
      <div className="px-4 py-8">
        <Image
          src={product.image}
          alt={product.name}
          quality={66}
          width={300}
          height={500}
          className="mb-4  w-full object-cover border"
          priority
        />
        <div>
          <h1 className="body-inter mt-8 text-2xl ">{product.name}</h1>
          <h2 className="body-inter  text-black text-opacity-50 ">
            {product.description}
          </h2>
        </div>

        <p className="text-l body-inter mt-4">{product.price.toFixed(2)} EUR</p>
        <button
          onClick={() => handleAddToCart(product)}
          className="body-inter text mt-6 w-full border border-black bg-black p-4 text-white hover:bg-white hover:text-black"
        >
          ADD TO CART
        </button>
      </div>
    </main>
  );
}

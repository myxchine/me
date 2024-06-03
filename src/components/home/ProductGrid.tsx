"use client";

import React, { useState, useEffect } from "react";
import { getProducts } from "@/server/queries";
import { Product } from "@/server/interface";
import Image from "next/image";
import Link from "next/link";

interface ProductGrid {
  number: number;
  loading: boolean;
  text: string;
  setLoading: () => boolean;
}

const ProductGrid: React.FC<ProductGrid> = ({
  number,
  loading,
  text,
  setLoading,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const start = performance.now();
      try {
        const productsData = await getProducts(number);
        console.log("Products", productsData);
        setProducts(productsData.data);
        setLoading(false);
        const end = performance.now();
        console.log("Fetched products in", end - start, "ms");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {!loading && (
        <div className="p-8 max-w-4xl mx-auto space-y-4">
          <h3 className="font-bold text-xl">{text}</h3>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 max-w-4xl mx-auto">
            {products.map((product: Product) => (
              <div key={product.id} className="">
                <Link href={`/home/store/product/${product.slug}`}>
                  <div>
                    <Image
                      width={200}
                      height={300}
                      src={product.image}
                      alt={product.name}
                      quality={50}
                      priority
                      placeholder="empty"
                      className="w-full h-[170px] md:h-[250px] object-cover border"
                    />
                    <div className="my-4 text-sm font-medium text-gray-900">
                      <p>{product.name}</p>

                      <p>{product.price.toFixed(2)} EUR</p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductGrid;

"use client";

import React, { useState, useEffect } from "react";
import { getProducts } from "@/server/queries";
import { Product } from "@/server/interface";
import Image from "next/image";
import Link from "next/link";

interface ProductGrid {
  number: number;
  loading: boolean;
  setLoading: () => boolean;
}

const ProductGrid: React.FC<ProductGrid> = ({
  number,
  loading,
  setLoading,
}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts(number);
        console.log("Products", productsData);
        setProducts(productsData.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {!loading && (
        <div className="p-4 max-w-4xl mx-auto space-y-4">
          <h1 className="font-bold text-xl">Featured</h1>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 max-w-4xl mx-auto">
            {products.map((product: Product) => (
              <div key={product.id} className="">
                <Link href={`home/store/product/${product.slug}`}>
                  <div>
                    <Image
                      width={150}
                      height={200}
                      src={product.image}
                      alt={product.name}
                      priority
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

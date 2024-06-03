"use client";

import React, { useState, useEffect } from "react";
import { getProducts } from "@/server/queries";
import { Product } from "@/server/interface";
import Image from "next/image";
import AddToCart from "../AddToCart";
import Skeleton from "./Skeleton";

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

  const handleAddToCart = async (product: Product) => {
    console.log("Adding product to cart:", product);

    try {
      const response = AddToCart(product);
      console.log(response);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <>
      {!loading && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
          {products.map((product: Product) => (
            <div key={product.id} className="mb-[6.5px]">
              <Image
                width={150}
                height={200}
                src={product.image}
                alt={product.name}
                priority
                className="w-full h-[170px] object-cover"
              />
              <div className="my-4 text-sm font-medium text-gray-900">
                <p>{product.name}</p>

                <p>${product.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-black border text-white px-4 py-2 rounded hover:bg-white hover:text-black text-xs "
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductGrid;

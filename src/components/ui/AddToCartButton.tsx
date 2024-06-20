"use client";

import AddToCart from "@/components/AddToCart";
import { Product } from "@/types/product";

interface CartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<CartButtonProps> = ({ product }) => {
  const handleAddToCart = async (product: Product) => {
    console.log("Adding product to cart:", product);

    try {
      const response = await AddToCart(product);
      console.log(response);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  return (
    <button
      onClick={() => handleAddToCart(product)}
      className="body-inter text mt-6 w-full border border-black bg-black p-2 text-white hover:bg-white hover:text-black rounded"
    >
      ADD TO CART
    </button>
  );
};

export default AddToCartButton;

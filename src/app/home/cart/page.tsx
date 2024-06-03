"use client";

import { useEffect, useState } from "react";
import { Product } from "@/server/interface";
import ProductElement from "@/components/elements/Product";

const Cart = () => {
  const [currentCart, setCurrentCart] = useState<Product[]>([]);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCurrentCart(storedCart);

      const totalQuantity = storedCart.reduce(
        (acc: number, product: Product) => acc + (product.quantity || 0),
        0
      );
      setTotalQuantity(totalQuantity);

      const totalPrice = storedCart.reduce(
        (acc: number, product: Product) =>
          acc + product.quantity * product.price,
        0
      );
      setTotalPrice(totalPrice);
    }
  }, []);

  return (
    <main className="flex flex-col items-center justify-center p-8">
      <div className="w-full block space-y-4">
        <h1 className="text-xl font-bold uppercase">Cart</h1>

        {currentCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {currentCart.map((product) => (
              <li key={product.id}>
                <ul className="w-full block space-y-4">
                  <ProductElement product={product} />
                </ul>
              </li>
            ))}
          </ul>
        )}

        <div>
          <p>Total items: {totalQuantity}</p>
          <p>Total price: ${totalPrice.toFixed(2)}</p>
          <button className="bg-black border text-white p-2 w-full mt-4 hover:bg-white hover:text-black">
            Checkout
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;

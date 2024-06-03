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

  const removeFromCart = (productId: number) => {
    const updatedCart = currentCart.filter(
      (product) => product.id !== productId
    );
    updateCart(updatedCart);
  };

  const decreaseQuantity = (productId: number) => {
    const updatedCart = currentCart.map((product) => {
      if (product.id === productId) {
        const newQuantity = Math.max(0, product.quantity - 1);
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    updateCart(updatedCart);
  };

  const increaseQuantity = (productId: number) => {
    const updatedCart = currentCart.map((product) => {
      if (product.id === productId) {
        const newQuantity = product.quantity + 1;
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    updateCart(updatedCart);
  };

  const updateCart = (updatedCart: Product[]) => {
    setCurrentCart(updatedCart);
    const totalQuantity = updatedCart.reduce(
      (acc: number, product: Product) => acc + (product.quantity || 0),
      0
    );
    setTotalQuantity(totalQuantity);

    const totalPrice = updatedCart.reduce(
      (acc: number, product: Product) => acc + product.quantity * product.price,
      0
    );
    setTotalPrice(totalPrice);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (cart: Product[]) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <main className="flex flex-col items-center justify-center p-8 max-w-6xl mx-auto">
      <div className="w-full block space-y-4">
        <h1 className="text-xl font-bold uppercase">Cart</h1>

        {currentCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {currentCart.map((product) => (
              <li key={product.id} className="w-full">
                <ul className="w-full flex  mb-4">
                  <ProductElement product={product} />
                  <div className=" flex flex-col justify-between items-center items-middle align-middle">
                    <button
                      className="p-2 mt-4  bg-black text-white hover:bg-white hover:text-black  text-xl border rounded w-[40px] justify-center"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </button>
                    <button
                      className="p-2 mb-4 bg-black text-white hover:bg-white hover:text-black text-xl border rounded  w-[40px]"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      -
                    </button>
                  </div>
                </ul>
                {product.quantity === 0 && (
                  <button
                    className="p-2 mb-4 bg-black text-white hover:bg-white hover:text-black text-sm border rounded  w-full"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                )}
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

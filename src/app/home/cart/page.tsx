"use client";

import { useEffect, useState } from "react";
import { Product } from "@/server/interface";
import ProductElement from "@/components/elements/Product";
import Link from "next/link";
import { IoArrowBackOutline } from "react-icons/io5";

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
      <div className="w-full block pb-4">
        <Link href="/home/store">
          <button className="flex items-centerw-full justify-left">
            <IoArrowBackOutline className="text-2xl" />
          </button>
        </Link>
      </div>

      <div className="w-full block space-y-8">
        <h1 className="text font-bold uppercase">
          Your cart ({totalQuantity} items)
        </h1>

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

        <div className="mt-4">
          <div className="flex justify-between text-sm uppercase">
            <p>Subtotal</p>
            <p>{totalPrice.toFixed(2)} EUR</p>
          </div>
          <div className="flex justify-between text-sm uppercase">
            <p>SHIPPING</p>
            <p className="">FREE</p>
          </div>
          <div className="flex justify-between text-md font-bold uppercase my-4">
            <p>TOTAL</p>
            <p>{totalPrice.toFixed(2)} EUR</p>
          </div>
          <button className="bg-black border border-black text-white p-2 w-full mt-4 hover:bg-white hover:text-black">
            Checkout
          </button>
          <Link href="/home/store">
            <button className="bg-white border border-black text-black p-2 w-full mt-4 hover:bg-black hover:text-white">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Cart;

"use client";

import { Product } from "@/server/interface";

const Cart = () => {
  let currentCart: Product[] = [];
  if (typeof window !== "undefined" && window.localStorage) {
    currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
  }

  return (
    <main className="flex flex-col items-center justify-center p-8">
      <div className="w-full block">
        <h1 className="text-xl font-bold uppercase">Cart</h1>
        {currentCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {currentCart.map((product) => (
              <li key={product.id}>
                <div>
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <p>Quantity: {product.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Cart;

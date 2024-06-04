"use client";
import { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { Product } from "@/server/interface";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.toString() || ""
);

export default function App() {
  const getCart = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");

      const lineItems = storedCart.map((product: Product) => ({
        price_data: {
          currency: "eur",
          product_data: {
            name: product.name,
            images: [product.image],
            description: product.description,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
      }));

      console.log(lineItems);

      return lineItems;
    }
    return [];
  };

  const fetchClientSecret = useCallback(async () => {
    const lineItems = getCart();
    console.log("Creating Stripe checkout session...", lineItems);

    return fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Stripe-Version": "2020-08-27",
      },
      body: JSON.stringify({
        lineItems,
      }),
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout">
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

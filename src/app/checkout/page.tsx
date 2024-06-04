"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { Checkout } from "@/components/Checkout";

const stripePromise = loadStripe(
  "pk_test_51OQRELKa6s8gzuS52RU1hgZCM8uWSZjzAK0X9JL3vQB5Njxml8Ux5fl5DFeRM2Jn3KN0Gn54dYoD3alzwa86NqYn00Gr9htWMp"
);

const CheckoutPage = () => {
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const getCart = () => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      return storedCart;
    }
    return [];
  };

  useEffect(() => {
    const cart = getCart();

    if (cart.length > 0) {
      const fetchClientSecret = async () => {
        try {
          const origin = window.location.origin;
          const session = await Checkout(cart, origin);
          setClientSecret(session.client_secret);
          console.log("Stripe checkout session created:", session);
        } catch (error) {
          console.error("Error creating Stripe checkout session:", error);
        }
      };

      fetchClientSecret();
    }
  }, []);

  const options = clientSecret ? { clientSecret } : {};

  return (
    <main>
      {clientSecret ? (
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
};

export default CheckoutPage;

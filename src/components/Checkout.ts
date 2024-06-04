"use client";

import { stripe } from "@/utils/stripe";
import { Product } from "@/server/interface";

export async function createCheckoutSession(cart: Product[], origin: string) {
  const lineItems = cart.map((product) => ({
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

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
      automatic_tax: { enabled: true },
    });

    return session;
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    throw error;
  }
}

export async function getCheckoutSession(sessionId: string) {
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return session;
  } catch (error) {
    console.error("Error retrieving Stripe checkout session:", error);
    throw error;
  }
}

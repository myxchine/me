"use server";

import { stripe } from "@/utils/stripe";
import { Product } from "@/server/interface";

export async function Checkout(cart: Product[], origin: string) {
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
  console.log(lineItems);

  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      return_url: "http://localhost:3000/success",
    });

    return session;
  } catch (error) {
    console.error("Error creating Stripe checkout session:", error);
    throw error;
  }
}

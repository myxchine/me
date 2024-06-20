"use server";

import { stripe } from "@/stripe";

const getSession = async (id: string) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(id);
    return session;
  } catch (error) {
    console.error("Error retrieving payment intent:", error);
    throw error;
  }
};

export default getSession;

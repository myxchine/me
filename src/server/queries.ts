"use server";

import { db } from "./db";

export const getProducts = async (limit: number) => {
  try {
    const data = await db
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    console.log("Products fetched:", data);

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

"use server";

import { db } from "./db";

export const getProducts = async (limit: number) => {
  try {
    const data = await db
      .from("products")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProduct = async (slug: string) => {
  try {
    const data = await db.from("products").select("*").eq("slug", slug);

    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const getOrders = async (limit: number) => {
  try {
    const data = await db
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit);

    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

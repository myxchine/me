"use server";

import { db } from ".";
import { products } from "./schema";
import { eq } from "drizzle-orm";

export const deleteProduct = async (id: string) => {
  const result = await db.delete(products).where(eq(products.id, id));
  return result;
};

export const updateProduct = async (id: string, data: any) => {
  const result = await db.update(products).set(data).where(eq(products.id, id));
  return result;
};

export const deleteOrder = async (id: string) => {
  const result = await db.delete(products).where(eq(products.id, id));
  return result;
};

export const updateOrder = async (id: string, data: any) => {
  const result = await db.update(products).set(data).where(eq(products.id, id));
  return result;
};

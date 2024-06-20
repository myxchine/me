"use server";

import { db } from ".";
import { products, orders } from "./schema";
import { eq } from "drizzle-orm";

export const addProduct = async (data: any) => {
  const result = await db.insert(products).values(data);
  return result;
};
export const deleteProduct = async (id: string) => {
  const result = await db.delete(products).where(eq(products.id, id));
  return result;
};

export const updateProduct = async (id: string, data: any) => {
  const result = await db.update(products).set(data).where(eq(products.id, id));
  return result;
};

export const addOrder = async (data: any) => {
  const result = await db.insert(orders).values(data);
  return result;
};

export const deleteOrder = async (id: string) => {
  const result = await db.delete(orders).where(eq(orders.id, id));
  return result;
};

export const updateOrder = async (id: string, data: any) => {
  const result = await db.update(orders).set(data).where(eq(orders.id, id));
  return result;
};

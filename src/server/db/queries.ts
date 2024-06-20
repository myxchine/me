"use server";

import { db } from ".";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
  const result = await db.query.products.findMany();
  return result.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image as string[],
    slug: item.slug,
    description: item.description,
    price: parseFloat(item.price as unknown as string),
    stock: item.stock,
    category: item.category,
    createdAt: item.createdAt ? new Date(item.createdAt) : new Date(),
    updatedAt: item.updatedAt ? new Date(item.updatedAt) : new Date(),
  })) as Product[];
}

export async function getProduct(slug: string): Promise<Product | null> {
  const result = await db.query.products.findFirst({
    where: (products, { eq }) => eq(products.slug, slug),
  });

  if (!result) {
    return null;
  }

  return {
    id: result.id,
    name: result.name,
    image: result.image as string[],
    slug: result.slug,
    description: result.description,
    price: parseFloat(result.price as unknown as string),
    stock: result.stock,
    category: result.category,
    createdAt: result.createdAt ? new Date(result.createdAt) : new Date(),
    updatedAt: result.updatedAt ? new Date(result.updatedAt) : new Date(),
  };
}

export async function getOrders(): Promise<Product[]> {
  const result = await db.query.orders.findMany();

  return result.map((item) => ({
    id: item.id,
    name: item.name,
    image: item.image as string[],
    slug: item.slug,
    description: item.description,
    price: parseFloat(item.price as unknown as string),
    stock: item.stock,
    category: item.category,
    createdAt: item.createdAt ? new Date(item.createdAt) : new Date(),
    updatedAt: item.updatedAt ? new Date(item.updatedAt) : new Date(),
  })) as Product[];
}
import { db } from "./db";
import { Product, Category, Customer, Order } from "./interface";

export const addProduct = async (formData: Product) => {
  const { data, error } = await db.from("products").insert([
    {
      name: formData.name,
      description: formData.description,
      price: formData.price,
      image: formData.image,
      category: formData.category,
      stock: formData.stock,
    },
  ]);
  if (error) {
    console.error("Error creating reservation:", error.message);
  } else {
    console.log("Reservation created:", data);
  }
};

export const deleteProduct = async (id: string) => {
  const { data, error } = await db.from("products").delete().eq("id", id);
  if (error) {
    console.error("Error deleting product:", error.message);
  } else {
    console.log("Product deleted:", data);
  }
};

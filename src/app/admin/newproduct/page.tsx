"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { addProduct } from "@/server/db/utils";
import { IoArrowBackOutline } from "react-icons/io5";
import Link from "next/link";

const AddProductForm = () => {
  const [productData, setProductData] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    image: [],
    category: "",
    stock: 0,
    created_at: "",

    slug: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProduct(productData);
    console.log("Product data:", productData);
    setProductData({
      id: "",
      name: "",
      description: "",
      price: 0,
      image: [],
      category: "",
      stock: 0,
      created_at: "",
      slug: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="  p-8 max-w-xl mx-auto">
      <div className="border p-4 rounded-lg flex flex-col gap-4">
        <div className="flex items-center justify-start space-x-4">
          <Link href="/admin">
            <button className="flex items-center">
              <IoArrowBackOutline className="text-2xl" />
            </button>
          </Link>
          <h2 className="text-2xl font-bold">Add Product</h2>
        </div>
        <div className="">
          <input
            type="text"
            id="name"
            name="name"
            value={productData.name}
            onChange={handleChange}
            required
            placeholder="Product name"
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="">
          <input
            id="description"
            name="description"
            value={productData.description}
            onChange={handleChange}
            required
            placeholder="Product description"
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>

        <div className="">
          <input
            type="text"
            id="image"
            name="image"
            value={productData.image}
            onChange={handleChange}
            required
            placeholder="Product Image URL"
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="">
          <input
            type="text"
            id="category"
            name="category"
            value={productData.category}
            onChange={handleChange}
            required
            placeholder="Product category"
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="">
          <input
            type="text"
            id="slug"
            name="slug"
            value={productData.slug}
            onChange={handleChange}
            required
            placeholder="Product slug"
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={productData.price}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="stock">Stock:</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={productData.stock}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded px-2 py-1 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;

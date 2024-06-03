"use client";

import React, { useState } from "react";
import { Product } from "@/server/interface";
import { addProduct } from "@/server/utils";

const AddProductForm = () => {
  const [productData, setProductData] = useState<Product>({
    id: "",
    name: "",
    description: "",
    price: 0,
    image: "",
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
    /*   setProductData({
      id: "",
      name: "",
      description: "",
      price: 0,
      image: "",
      category: "",
      stock: 0,
      created_at: "",
    });*/
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full p-8">
      <h2 className="text-2xl font-bold">Add Product</h2>
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
    </form>
  );
};

export default AddProductForm;

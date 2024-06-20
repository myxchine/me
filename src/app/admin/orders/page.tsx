"use client";

import React, { useState, useEffect } from "react";
import { deleteOrder } from "@/server/db/utils";
import { getOrders } from "@/server/db/queries";
import { FiTrash } from "react-icons/fi";
import { IoMdAddCircleOutline } from "react-icons/io";
import { Order } from "@/types/order";
import Link from "next/link";

const MainView: React.FC = () => {
  const [products, setProducts] = useState<Order[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleSelectedProduct = (id: string) => {
    const isSelected = selectedProducts.includes(id);
    if (isSelected) {
      setSelectedProducts(selectedProducts.filter((p) => p !== id));
    } else {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const deleteSelectedProducts = () => {
    selectedProducts.forEach((id) => {
      deleteOrder(id);
    });
    setSelectedProducts([]);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getOrders(10);
        if (productsData.status === 200) {
          // If the request is successful, set the products
          setProducts(productsData.data as Order[]);
          console.log(productsData.data);
        } else {
          console.error("Error fetching products:", productsData.error);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <main>
      <div className="w-full">
        <div className="w-full p-4 bg-white bg-opacity-50 rounded-lg space-y-4">
          <div className="flex justify-between items-center space-x-4">
            <h1 className="text-xl font-bold uppercase">Orders</h1>
          </div>
          <div className="space-x-4">
            {selectedProducts.length > 0 && (
              <button
                className="text-black text-opacity-100 hover:text-red rounded border border-gray-300 p-2"
                onClick={deleteSelectedProducts}
                disabled={selectedProducts.length === 0}
              >
                <div className="flex justify-center items-center space-x-2">
                  <FiTrash />
                  <p className="text-xs">
                    Delete {selectedProducts.length} orders
                  </p>
                </div>
              </button>
            )}
          </div>

          <div className=" border border-gray-300 rounded-lg overflow-hidden">
            <table className="table-auto w-full space-y-4 border border-gray-300 p-4 rounded-lg overflow-hidden">
              <thead className="border-b border-gray-300 p-4 rounded-t-lg">
                <tr className="text-left">
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>

                  <th className="p-4">Price</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products && products.length > 0 ? (
                  products.map((product) => (
                    <tr
                      key={product.id}
                      className="text-left border-b pb-4 overflow-hidden"
                    >
                      <td className="p-4">
                        {truncateText(product.customer_details.name, 20)}
                      </td>
                      <td className="p-4">
                        {truncateText(product.customer_details.email, 20)}
                      </td>

                      <td className="p-4">
                        €{(product.amount_total / 100).toFixed(2)}
                      </td>
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedProducts.includes(product.id)}
                          onChange={() => toggleSelectedProduct(product.id)}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="w-full">
                    <td
                      colSpan={4}
                      className="text-center w-full py-12 text-xs"
                    >
                      No products found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainView;

"use server";

import { Product } from "@/server/interface"; // Adjust the import path as needed

export default async function Loading(number: number) {
  const loadingProducts: Product[] = Array(number).fill({
    id: "loading",
    name: "Loading...",
    price: 0,
  });

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {loadingProducts.map((product: Product, index: number) => (
        <div key={index} className="">
          <div className="w-full h-[170px] bg-black bg-opacity-50 rounded-lg" />
          <div className="my-4 text-sm font-medium text-gray-900">
            <p className="h-[20px] bg-black bg-opacity-50 rounded-t-lg"></p>
            <p className="h-[20px] bg-black bg-opacity-50 rounded-b-lg"></p>
          </div>
          <button className="h-[34px] w-full bg-black bg-opacity-50 rounded-lg"></button>
        </div>
      ))}
    </div>
  );
}

"use client";

import ProductGrid from "@/components/home/ProductGrid";
import Skeleton from "@/components/home/Skeleton";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className="">
      {loading && <Skeleton number={4} />}
      <ProductGrid number={4} loading={loading} setLoading={setLoading} />
    </main>
  );
};

export default Home;

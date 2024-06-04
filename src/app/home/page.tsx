"use client";

import ProductGrid from "@/components/home/ProductGrid";
import Hero from "@/components/home/Hero";
import Skeleton from "@/components/home/Skeleton";
import { useState } from "react";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className="">
      {loading && <Skeleton number={4} title={false} />}
      <ProductGrid
        number={4}
        loading={loading}
        setLoading={setLoading}
        text=""
      />
    </main>
  );
};

export default Home;

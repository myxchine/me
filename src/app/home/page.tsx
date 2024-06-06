"use client";

import ProductGrid from "@/components/home/ProductGrid";
import Skeleton from "@/components/home/Skeleton";
import { useState } from "react";
import Hero from "@/components/home/Hero";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <main className="">
      <Hero />
      {loading && <Skeleton number={4} title={true} />}
      <ProductGrid
        number={4}
        loading={loading}
        setLoading={setLoading}
        text="Featured"
      />
    </main>
  );
};

export default Home;

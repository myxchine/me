import { Suspense } from "react";
import ProductGrid from "@/components/home/ProductGrid";

const Home = () => {
  return (
    <main className="">
      <Suspense fallback={<div>Loading...</div>}>
        <ProductGrid />
      </Suspense>
    </main>
  );
};

export default Home;

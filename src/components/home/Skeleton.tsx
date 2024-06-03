import { Product } from "@/server/interface";

interface SkeletonProps {
  number: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ number }) => {
  const loadingProducts: Product[] = Array(number).fill({
    id: "loading",
    name: "Loading...",
    price: 0,
  });

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 p-4 max-w-4xl mx-auto">
      {loadingProducts.map((_, index: number) => (
        <div key={index} className="m-0">
          <div className="w-full h-[170px] bg-black bg-opacity-10 animate-pulse" />
          <div className="my-4 text-sm font-medium text-gray-900">
            <p className="h-[20px] bg-black bg-opacity-10 animate-pulse" />
            <p className="h-[20px] bg-black bg-opacity-10 animate-pulse" />
          </div>
          <button className="h-[34px] pb-0 mb-0 w-full bg-black bg-opacity-10 animate-pulse" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;

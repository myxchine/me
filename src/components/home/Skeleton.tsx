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
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      <h3 className="h-[28px] bg-black bg-opacity-10 animate-pulse w-[120px]"></h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-4 max-w-4xl mx-auto">
        {loadingProducts.map((_, index: number) => (
          <div key={index} className="m-0">
            <div className="w-full h-[170px] md:h-[250px] bg-black bg-opacity-30 animate-pulse" />
            <div className="my-4 ">
              <p className="h-[20px] bg-black bg-opacity-10 animate-pulse" />
              <p className="h-[20px] bg-black bg-opacity-20 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;

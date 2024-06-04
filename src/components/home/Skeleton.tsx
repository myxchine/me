import { Product } from "@/server/interface";

interface SkeletonProps {
  number: number;
  title: boolean;
}

const Skeleton: React.FC<SkeletonProps> = ({ number, title }) => {
  const loadingProducts: Product[] = Array(number).fill({
    id: "loading",
    name: "Loading...",
    price: 0,
  });

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-4">
      {title && (
        <h3 className="h-[28px] bg-black bg-opacity-10 animate-pulse w-[120px]"></h3>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2  max-w-5xl mx-auto">
        {loadingProducts.map((_, index: number) => (
          <div key={index} className="m-0">
            <div className="w-full h-[400px] bg-black bg-opacity-30 animate-pulse" />

            <div className="my-4 ">
              <p className="h-[20px] bg-black bg-opacity-10 animate-pulse w-[70%]" />
              <p className="h-[20px] bg-black bg-opacity-20 animate-pulse w-[40%]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;

import { Product } from "@/types/product";
import Image from "next/image";

const ProductComponent: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex w-full jsut-between items-center space-x-8">
      <Image
        width={100}
        height={200}
        src={product.image[0]}
        alt={product.name}
        priority={true}
        className="w-[250px] h-auto border"
      />
      <div className="my-4 text-sm font-medium text-gray-900 w-full">
        <p>{product.name}</p>

        <p>${product.price}</p>
        <p>x{product.quantity}</p>
      </div>
    </div>
  );
};

export default ProductComponent;

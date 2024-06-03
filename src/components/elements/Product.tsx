import { Product } from "@/server/interface";

const ProductComponent: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <h2>Product</h2>
      <ul>
        <li>
          <strong>ID:</strong> {product.id}
        </li>
        <li>
          <strong>Name:</strong> {product.name}
        </li>
        <li>
          <strong>Description:</strong> {product.description}
        </li>
        <li>
          <strong>Price:</strong> {product.price}
        </li>
        <li>
          <strong>Image:</strong> {product.image}
        </li>
        <li>
          <strong>Category:</strong> {product.category}
        </li>
        <li>
          <strong>Stock:</strong> {product.stock}
        </li>
      </ul>
    </div>
  );
};

export default ProductComponent;

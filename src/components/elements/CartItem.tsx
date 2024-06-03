import { CartItem } from "@/server/interface";
import Image from "next/image";

const CartItemComponent: React.FC<{ cartItem: CartItem }> = ({ cartItem }) => {
  return (
    <div className="cart-item">
      <h3>{cartItem.product.name}</h3>
      <p>Quantity: {cartItem.quantity}</p>
      <p>Price: ${cartItem.price}</p>
      <p>Total: ${cartItem.totalPrice}</p>
      <Image
        src={cartItem.product.image}
        alt={cartItem.product.name}
        width={200}
        height={200}
      />
    </div>
  );
};

export default CartItemComponent;

import { Order } from "@/server/interface";

const OrderComponent: React.FC<{ order: Order }> = ({ order }) => {
  return (
    <div className="order">
      <h2>Order ID: {order.id}</h2>
      <p>Status: {order.status}</p>
      <h3>Items</h3>
      <ul>
        {order.items.map((item) => (
          <li key={item.productId}>
            {item.name} - Quantity: {item.quantity} - Total: ${item.total}
          </li>
        ))}
      </ul>
      <p>Subtotal: ${order.subtotal}</p>
      <p>Tax: ${order.tax}</p>
      <p>Shipping: ${order.shippingCost}</p>
      <p>Total: ${order.total}</p>
      <h3>Shipping Details</h3>
      <p>Method: {order.shippingDetails.method}</p>
      <p>Status: {order.shippingDetails.status}</p>
      <p>
        Estimated Delivery:{" "}
        {new Date(order.shippingDetails.estimatedDelivery).toLocaleDateString()}
      </p>
      {order.notes && <p>Notes: {order.notes}</p>}
    </div>
  );
};

export default OrderComponent;

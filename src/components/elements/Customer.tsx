import { Customer } from "@/server/interface";

const CustomerComponent: React.FC<{ customer: Customer }> = ({ customer }) => {
  return (
    <div className="customer">
      <h2>{`${customer.firstName} ${customer.lastName}`}</h2>
      <p>Email: {customer.email}</p>
      {customer.phone && <p>Phone: {customer.phone}</p>}
      <p>
        Account Created: {new Date(customer.createdAt).toLocaleDateString()}
      </p>
      {customer.addresses && (
        <div>
          <h3>Addresses</h3>
          <ul>
            {customer.addresses.map((address, index) => (
              <li key={index}>
                {address.street}, {address.city}, {address.state}{" "}
                {address.postalCode}, {address.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerComponent;

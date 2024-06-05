export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  [key: string]: any;
  created_at: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  parentCategoryId?: string;
  childrenCategoryIds?: string[];
  image?: string;
  thumbnail?: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string[];
  displayOrder?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  customAttributes?: {
    [key: string]: any;
  };
}

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Customer {
  id: string; // Unique identifier for the customer
  firstName: string; // First name of the customer
  lastName: string; // Last name of the customer
  email: string; // Email address of the customer
  phone?: string; // Optional phone number of the customer
  passwordHash: string; // Hashed password of the customer
  addresses?: Address[]; // Array of addresses for the customer
  defaultShippingAddressId?: string; // ID of the default shipping address
  defaultBillingAddressId?: string; // ID of the default billing address
  dateOfBirth?: string; // Date of birth of the customer (ISO 8601 format)
  gender?: "male" | "female" | "other"; // Gender of the customer
  createdAt: string; // Creation date of the customer account (ISO 8601 format)
  updatedAt: string; // Last updated date of the customer account (ISO 8601 format)
  isActive: boolean; // Whether the customer account is active
  lastLogin?: string; // Last login date (ISO 8601 format)
  customAttributes?: {
    [key: string]: any; // Key-value pairs for custom attributes
  };
}

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
  discountPrice?: number;
  total: number;
}

interface PaymentDetails {
  method: string; // e.g., 'credit_card', 'paypal'
  transactionId?: string;
  status: "pending" | "completed" | "failed";
}

interface ShippingDetails {
  address: Address;
  method: string; // e.g., 'standard', 'express'
  cost: number;
  trackingNumber?: string;
  status: "pending" | "shipped" | "delivered" | "returned";
  estimatedDelivery: string; // ISO 8601 format
}

export interface Order {
  customer_id: number;
  customer_email: string;
  customer_name: string;
  stripe_transaction_id: string;
  order_date: string;
  total: number;
  status: string;
  // add any other columns you want to insert
}

export interface CartItem {
  userId: string;
  id: string; // Unique identifier for the cart item
  product: Product; // Product details
  quantity: number; // Quantity of the product in the cart
  price: number; // Price of the product at the time it was added to the cart
  discount?: number; // Optional discount applied to the product
  totalPrice: number; // Total price for this cart item (quantity * price)
}

export interface Order {
  customer_id: number;
  customer_email: string;
  customer_name: string;
  stripe_transaction_id: string;
  order_date: string;
  total: number;
  status: string;
}

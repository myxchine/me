import Stripe from "stripe";

export const stripe = new Stripe(
  "sk_test_51OQRELKa6s8gzuS5oLP3cyowXs5ZfkWupLggLFbqezufYwJTDVMNaNOo473WYex30phcYFa2xSlhwdLkb6vaBHN300SBWtYPEk",
  {
    apiVersion: "2024-04-10",
  }
);

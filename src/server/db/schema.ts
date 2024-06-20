import {
  uuid,
  varchar,
  text,
  numeric,
  pgTableCreator,
  timestamp,
  integer,
  jsonb,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const createTable = pgTableCreator((name) => `cabra_${name}`);

export const products = createTable("products", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: varchar("name", { length: 256 }).notNull(),
  image: jsonb("image").array(),
  slug: varchar("slug", { length: 256 }).notNull(),
  description: text("description").notNull(),
  price: numeric("price").notNull(),
  stock: integer("stock").notNull(),
  category: varchar("category", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const orders = createTable("orders", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  customer_id: integer("customer_id").notNull(),
  customer_email: varchar("customer_email", { length: 256 }).notNull(),
  customer_name: varchar("customer_name", { length: 256 }).notNull(),
  stripe_transaction_id: varchar("stripe_transaction_id", {
    length: 256,
  }).notNull(),
  order_date: timestamp("order_date").defaultNow().notNull(),
  total: numeric("total").notNull(),
  status: varchar("status", { length: 256 }).notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

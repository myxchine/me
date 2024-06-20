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

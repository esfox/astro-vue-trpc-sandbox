import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
  id: text("id").notNull().unique(),
  email: text("email", { length: 255 }),
  passwordHash: text("password_hash"),
  username: text("username", { length: 255 }),
  firstName: text("first_name", { length: 255 }),
  lastName: text("last_name", { length: 255 }),
  createdAt: text("created_at").notNull().default(new Date().toString()),
  updatedAt: text("updated_at"),
  deletedAt: text("deleted_at"),
});

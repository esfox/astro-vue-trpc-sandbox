import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/database/schema.ts",
  out: "./src/database/migrations",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_CONNECTION_URL!,
    authToken: process.env.DB_AUTH_TOKEN!,
  },
} satisfies Config;

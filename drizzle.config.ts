import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
import path from "path";
dotenv.config({ path: ".env" });

export default {
  driver: "pg",
  schema: "./lib/db/shema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;

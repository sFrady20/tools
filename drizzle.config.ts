import { DATABASE_TABLE_PREFIX, DATABASE_URL } from "./src/vars";
import type { Config } from "drizzle-kit";

export default {
  schema: "./src/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: DATABASE_URL!,
  },
  tablesFilter: [`${DATABASE_TABLE_PREFIX}*`],
} satisfies Config;

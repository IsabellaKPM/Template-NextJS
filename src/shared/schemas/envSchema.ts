import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url().default("http://localhost:4000"),
  NEXT_PUBLIC_APP_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

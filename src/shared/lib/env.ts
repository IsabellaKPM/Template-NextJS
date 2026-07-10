import { envSchema } from "@/shared/schemas/env.schema";

const createEnv = () => {
  const result = envSchema.safeParse({
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
  });

  if (!result.success) {
    console.error("--- Invalid environment variables:", result.error.format());
    throw new Error("Invalid environment variables");
  }

  return result.data;
};

export const env = createEnv();

import { z } from "zod";
import { envSchema } from "@/shared/schemas/envSchema";

const createEnv = () => {
  const result = envSchema.safeParse({
    NEXT_PUBLIC_APP_ENV: process.env.NEXT_PUBLIC_APP_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  });

  if (!result.success) {
    console.error(
      "--- Invalid environment variables:",
      z.treeifyError(result.error),
    );
    throw new Error("Invalid environment variables");
  }

  return result.data;
};

export const env = createEnv();

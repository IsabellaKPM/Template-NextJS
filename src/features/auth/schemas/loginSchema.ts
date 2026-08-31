import { z } from "zod";

const emailSchema = z.object({
  loginType: z.literal("email"),
  identifier: z.email({
    message: "Invalid email, please enter a valid email address",
  }),
});

const usernameSchema = z.object({
  loginType: z.literal("username"),
  identifier: z
    .string()
    .min(3, "The username must be at least 3 characters long"),
});

export const loginSchema = z
  .discriminatedUnion("loginType", [emailSchema, usernameSchema])
  .and(
    z.object({
      password: z
        .string()
        .min(8, "The password must be at least 8 characters long"),
    }),
  );

export type LoginFormValues = z.infer<typeof loginSchema>;

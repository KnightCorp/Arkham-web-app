import { z } from "zod";

export const SignUpSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(3, {
      message: "Username must be at least 3 characters long",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 8 characters long",
    }),
    confirmPassword: z.string().min(6, {
      message: "Password must be at least 8 characters long",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignInSchema = z.object({
  usernameOrEmail: z
    .string()
    .min(1)
    .refine(
      (value) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ||
        /^[a-zA-Z0-9_.-]+$/.test(value),
      { message: "Must be a valid email or username" }
    ),
  password: z.string().min(6),
});

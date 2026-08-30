"use client";

import { useLoginForm } from "../hooks/useLoginForm";
import { LoginFormFields } from "./LoginFormFields";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export function LoginForm() {
  const { form, loginType, handleLoginTypeChange, handleSubmit } =
    useLoginForm();

  return (
    <Card className="w-full max-w-md rounded-xl border shadow-sm">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-semibold tracking-tight">
          Sign In
        </CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <LoginFormFields
            control={form.control}
            loginType={loginType}
            onLoginTypeChange={handleLoginTypeChange}
          />
        </form>
      </CardContent>
    </Card>
  );
}

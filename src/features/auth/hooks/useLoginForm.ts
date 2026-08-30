"use client";

import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { loginSchema, type LoginFormValues } from "../schemas/login.schema";
import { useLoginMutation } from "./useLoginMutation";
import { ROUTES } from "@/shared/lib/routes";

export function useLoginForm() {
  const router = useRouter();
  const loginMutation = useLoginMutation();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      loginType: "email",
      identifier: "",
      password: "",
    },
  });

  const loginType = useWatch({
    control: form.control,
    name: "loginType",
  });

  const handleLoginTypeChange = (type: "email" | "username") => {
    form.setValue("loginType", type);
    form.setValue("identifier", "");
    form.clearErrors("identifier");
  };

  const onSubmit = (data: LoginFormValues) => {
    loginMutation.mutate(data, {
      onSuccess: () => {
        router.push(ROUTES.dashboard);
      },
      onError: (_error) => {
        form.setError("root", {
          message: "Invalid credentials. Please try again.",
        });
      },
    });
  };

  return {
    form,
    loginType,
    handleLoginTypeChange,
    handleSubmit: form.handleSubmit(onSubmit),
    isSubmitting: loginMutation.isPending,
    submitError: form.formState.errors.root?.message,
  };
}

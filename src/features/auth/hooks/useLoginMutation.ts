import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/shared/lib/axios";
import { API_ENDPOINTS } from "@/shared/lib/apiEndpoints";
import { User } from "@/features/auth/interfaces/user";
import type { LoginFormValues } from "../schemas/loginSchema";

const login = async (credentials: LoginFormValues): Promise<User> => {
  const payload = {
    ...(credentials.loginType === "email"
      ? { email: credentials.identifier }
      : { username: credentials.identifier }),
    password: credentials.password,
  };

  const { data } = await apiClient.post<User>(
    API_ENDPOINTS.client.auth.login,
    payload,
    { withCredentials: true },
  );

  return data;
};

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      queryClient.setQueryData(["auth", "me"], user);
    },
  });
}

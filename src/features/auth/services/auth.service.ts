import { apiClient } from "@/shared/lib/axios";
import { API_ENDPOINTS } from "@/shared/lib/apiEndpoints";
import { User } from "@/shared/interfaces/user.interface";
import type { LoginFormValues } from "../schemas/login.schema";

export const authService = {
  login: async (credentials: LoginFormValues): Promise<User> => {
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
  },

  logout: async (): Promise<void> => {
    await apiClient.post(
      API_ENDPOINTS.client.auth.logout,
      {},
      { withCredentials: true },
    );
  },
};

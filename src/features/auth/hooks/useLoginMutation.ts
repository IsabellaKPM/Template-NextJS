import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authService } from "../services/auth.service";

export function useLoginMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authService.login,
    onSuccess: (user) => {
      queryClient.setQueryData(["auth", "me"], user);
    },
  });
}

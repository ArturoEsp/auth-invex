import { useMutation } from "@tanstack/vue-query";
import { authenticationService, logoutService } from "..";

export const useAuthMutation = () => {
  return useMutation(authenticationService);
}

export const useLogoutMutation = () => {
  return useMutation(logoutService);
}
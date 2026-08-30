import { group } from "@/shared/lib/apiBuilder";

const API_PREFIX = "/api";
const ADMIN_PREFIX = "/admin";

export const API_ENDPOINTS = {
  client: group(API_PREFIX, {
    auth: group("/auth", {
      login: "/login",
      logout: "/logout",
      refresh: "/refresh",
      me: "/me",
    }),
  }),
  admin: group(ADMIN_PREFIX, {
    dashboard: "/dashboard",
  }),
};

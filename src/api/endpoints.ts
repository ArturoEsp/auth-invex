import { EnvConstants } from "../constants";

export const Endpoints = {
  auth: "/oauth2/token",
  logout: "/divisas-derivados/authenticaton/1.0.0/LogOut",
  modyo_me: `/api/customers/realms/${EnvConstants.MODYO.KING}/me`,
};

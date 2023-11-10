import { EnvConstants } from "../constants";

export const setTokenSessionStorage = (token: string) => {
  sessionStorage.setItem("token", token);
};

export const removeTokenSession = () => {
  sessionStorage.removeItem("token");
};

export const setLogoutSessionStorage = (tokenId: string) => {
  const url = `${EnvConstants.API_URL}/oidc/logout?id_token_hint=${tokenId}&post_logout_redirect_uri=${EnvConstants.REDIRECT_URI}`;
  sessionStorage.setItem("logout", url);
};

export const getLogoutURLSessionStorage = () =>
  sessionStorage.getItem("logout");

export const getTokenSessionStorage = () => sessionStorage.getItem("token");

export const removeAllSessionStorage = () => {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("logout");
};

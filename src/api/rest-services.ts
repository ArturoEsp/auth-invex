import { HttpClient } from "."
import { EnvConstants } from "../constants";
import { Endpoints } from "./endpoints";
import { HttpClientCrypto, HttpClientModyo } from "./httpClient";
import { AuthResponse, LoginRequest, LogoutResponse, ModyoMeResponse } from "./types";

export const authenticationService = async (req: LoginRequest) => {
  const { data } = await HttpClient.post<AuthResponse>(Endpoints.auth, {
    grant_type: 'authorization_code',
    redirect_uri: EnvConstants.REDIRECT_URI,
    code: req.code,
  });

  return data;
}

export const logoutService =  async ({ token }: { token: string }) => {
  const { data } = await HttpClientCrypto.post<LogoutResponse>(Endpoints.logout, {}, {
    headers: { Authorization: `Bearer ${token}` }
  });

  return data;
}

export const modyoMeService =  async () => {
  const { data } = await HttpClientModyo.get<ModyoMeResponse>(Endpoints.modyo_me);

  return data;
}
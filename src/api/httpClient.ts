import axios from "axios";
import { EnvConstants } from "../constants";

const HttpClient = axios.create({
  baseURL: EnvConstants.API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${btoa(
      EnvConstants.CLIENT_ID + ":" + EnvConstants.CLIENT_SECRET
    )}`,
  },
});

export const HttpClientCrypto = axios.create({
  baseURL: EnvConstants.API_URL_INVEX_CRYPTO,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

export const HttpClientModyo = axios.create({
  baseURL: EnvConstants.MODYO.API,
});

export default HttpClient;

import axios from "axios";
import { readToken } from "../services/localStorage.service";
import { ApiError } from "./ApiError";
export const baseURL = "https:/znode.com/api/";
export const httpApi = axios.create({
  baseURL: baseURL,
});

httpApi.interceptors.request.use((config:any) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${readToken()}`,
  };
  return config;
});

httpApi.interceptors.response.use(undefined, (error: any) => {
  if (error?.response?.status === 401) {
    window.location.href = "/logout";
  }
  throw new ApiError<ApiErrorData>(
    error && error.response?.data["message_description"]
      ? error.response?.data["message_description"]
      : error.message
  );
});


export interface ApiErrorData {
  message: string;
}

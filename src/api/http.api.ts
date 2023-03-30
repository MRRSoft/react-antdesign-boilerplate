import axios, { AxiosError } from "axios";
import { readToken } from "./services/localStorage.service";
import { ApiError } from "./ApiError";

export const baseURL = "https:/znode.com/api/";

export interface ApiResponse<T> {
  data: T;
}

export interface ApiErrorData {
  message: string;
}

export const httpApi = axios.create({
  baseURL: baseURL,
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
httpApi.interceptors.request.use((config: any) => {
  config.headers = {
    ...config.headers,
    Authorization: `Bearer ${readToken()}`,
  };
  return config;
});

httpApi.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ApiErrorData>) => {
    if (error?.response?.status === 401) {
      window.location.href = "/logout";
    }
    throw new ApiError<ApiErrorData>(
      error && error.response?.data?.message
        ? error.response?.data?.message
        : error.message
    );
  }
);

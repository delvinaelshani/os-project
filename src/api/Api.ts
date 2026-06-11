import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://jsonplaceholder.typicode.com";

export async function apiRequest<D = {}, R = unknown>({
  url,
  method = "GET",
  ...options
}: AxiosRequestConfig<D>) {
  return await Axios.request<D, AxiosResponse<R>>({
    baseURL: API_BASE_URL,
    url,
    method,
    ...options,
  });
}

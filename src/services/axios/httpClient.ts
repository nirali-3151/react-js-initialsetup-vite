import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";
import { getCancelToken } from "./cancelToken";

// Axios instance
export const api_services = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL as string,
});

// Get admin token from localStorage
export const getAdminIdentification = (): string | null => {
  const data = localStorage.getItem("USER_AUTH_TOKEN");
  return data ? `Bearer ${data}` : null;
};

// URLs that require cancel tokens
const urlToAddCancelToken: string[] = ["/getEducation"];

// Request interceptor
api_services.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const finalData = getAdminIdentification();

    // Ensure headers are always defined
    config.headers = config.headers ?? {};

    if (finalData) {
      config.headers["Authorization"] = finalData;
    }

    if (config.url && urlToAddCancelToken.includes(config.url)) {
      config.cancelToken = getCancelToken(config.url);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api_services.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error)
);

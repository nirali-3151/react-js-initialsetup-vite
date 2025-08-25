import axios, {
  type InternalAxiosRequestConfig,
  type AxiosResponse,
  isAxiosError,
} from "axios";
import { getCancelToken } from "./cancelToken";
import { getDataFromLocal } from "@utils/localStorage";

// Axios instance
export const api_services = axios.create({
  baseURL: "https://httpstat.us" as string,
});

// Get admin token from localStorage
export const getAdminIdentification = (): string | null => {
  const data = getDataFromLocal("USER_AUTH_TOKEN");
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
  // (error) => Promise.reject(error)
);

// Response interceptor
// api_services.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (isAxiosError(error) && error.response && error.response.data) {
//       const { status } = error.response;
//       const { message, code, name, errors } = error.response.data;

//       // Throw a proper Error object
//       const err = new Error(message || `HTTP Error ${status}`);
//       // Optional: attach additional info
//       (err as any).status = status;
//       (err as any).code = code;
//       (err as any).name = name;
//       (err as any).errors = errors;

//       throw err; // Throw a proper Error instance
//     }

//     // For other unknown errors
//     throw error ;
//   }
// );

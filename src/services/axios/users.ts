import { api_services } from "./httpClient";

export const getListOfUsersApi = async () => {
  const response = await api_services.get("/500");
  return response.data;
};

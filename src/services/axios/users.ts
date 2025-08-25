import { errorHandlerFunctionCatchBlock } from "./ErrorHandler";
import { api_services } from "./httpClient";

export const getListOfUsersApi = async () => {
  try {
    const response = await api_services.get("/users");
    console.log("response",response);
    
    return response.data;
  } catch (err) {
    const data = await errorHandlerFunctionCatchBlock(err);
    return data;
  }
};
import { getListOfUsersApi } from "@services/axios/users";
import { queryClient } from "./client";
import { HOME_API_QUERY } from "@constants/querycontant";


export const getUserListQuery = async () => {
  await queryClient.prefetchQuery({
    queryKey: [HOME_API_QUERY.USER_DETAIL_CONST],
    queryFn: getListOfUsersApi,
  });
};

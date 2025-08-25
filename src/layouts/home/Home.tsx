import FallbackUI from "@components/fallbackUi/FallbackUI";
import Table from "@components/table/Table";
import { UserColumns } from "@constants/home";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router";
import { HOME_API_QUERY } from "@constants/querycontant";
import { getListOfUsersApi } from "@services/axios/users";

function useUserList() {
  return useQuery({
    queryKey: [HOME_API_QUERY.USER_DETAIL_CONST],
    queryFn: getListOfUsersApi,
  });
}

export function Home() {
  const loaderData = useLoaderData();
  const { data, isLoading } = useUserList();

  return (
    <div className="mx-12">
      <p className="heading-text text-center py-4">{loaderData?.message}</p>
      <FallbackUI data={loaderData?.data}>
        <Table columns={UserColumns} data={data || []} isLoading={isLoading} />
      </FallbackUI>
    </div>
  );
}

export default Home;

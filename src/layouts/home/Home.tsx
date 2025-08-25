import FallbackUI from "@components/fallbackUi/FallbackUI";
import Table from "@components/table/Table";
import { UserColumns, users } from "@constants/home";
import { useLoaderData } from "react-router";

export async function getUserData() {
  const response = await fetch("https://httpbin.org/delay/5");

  if (!response.ok) {
    throw new Response("Failed to fetch user data", {
      status: response.status,
    });
  }

  const json = await response.json();

  console.log("json", json);

  return { message: "Hello World" };
}

export async function loader() {
  return {
    message: "All User Data",
    data: getUserData(),
  };
}

export function Home() {
  const data = useLoaderData();

  console.log("data -------", data);

  return (
    <div className="mx-12">
      <p className="heading-text text-center py-4">{data.message}</p>
      <FallbackUI data={data.data}>
        <Table columns={UserColumns} data={users} />
      </FallbackUI>
    </div>
  );
}

export default Home;

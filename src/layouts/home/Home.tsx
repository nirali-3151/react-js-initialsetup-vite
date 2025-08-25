import React from "react";
import { Await, useLoaderData } from "react-router";

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
    message: "heelo",
    data: getUserData(),
  };
}

export function Home() {
  const data = useLoaderData();

  console.log("data -------", data);

  return (
    <div>
      <p>{data.message}</p>
      <React.Suspense fallback={<p>Loading user data...</p>}>
        <Await resolve={data.data}>
          {(user) => <pre>{JSON.stringify(user, null, 2)}</pre>}
        </Await>
      </React.Suspense>
    </div>
  );
}

export default Home;

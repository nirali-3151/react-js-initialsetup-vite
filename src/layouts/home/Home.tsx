import React from "react";
import { useLoaderData } from "react-router";

export async function getUserData() {
  return { message: "Hello, world!" };
}

const Home = () => {
  const data = useLoaderData();

  console.log("Loader data:", data);
  
  return <div>{data?.message}</div>;
};

export default Home;

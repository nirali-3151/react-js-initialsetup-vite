import { useLoaderData, useNavigation } from "react-router";

// Home.jsx (or your loader file)
// Home.jsx (or Home.tsx if using TS)
export async function getUserData() {
  const response = await fetch("https://httpbin.org/delay/5");

  if (!response.ok) {
    throw new Response("Failed to fetch user data", {
      status: response.status,
    });
  }
  const json = await response.json();
  return json;
}

const Home = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  console.log("data", data);
  console.log("navigation", navigation);

  return (
    <div className="home-container">
      <h1>Welcome to the Home Page</h1>
      <p>{data.message}</p>
    </div>
  );
};

export default Home;

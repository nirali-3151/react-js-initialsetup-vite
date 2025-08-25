import Loader from "@components/loader/Loader";
import Home from "@layouts/home/Home";
import { getUserListQuery } from "@services/query/userQuery";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    // loader: async () => {
    //   const data = await getUserListQuery(); 
    //   return { data }; 
    // },
    HydrateFallback: Loader,
  },
]);

export default function BaseNavigator() {
  return <RouterProvider router={router} />;
}

import Loader from "@components/Loader";
import Home, { getUserData } from "@layouts/home/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    loader: getUserData,
    HydrateFallback: Loader,
  },
]);

export default function BaseNavigator() {
  return <RouterProvider router={router} />;
}

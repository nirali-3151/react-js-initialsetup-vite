import { useLayoutEffect } from "react";
import { useOnlineStatus } from "@utils/useOnlineOffline";
import BaseNavigator from "./baseNavigator";
import Header from "@components/header/Header";
import { getTheme, setTheme } from "@utils/theme";

export default function App() {
  const isOnline = useOnlineStatus();

  useLayoutEffect(() => {
    setTheme(getTheme());
  }, []);

  return (
    <div>
      <Header />
      <BaseNavigator />
    </div>
  );
}

import { useLayoutEffect } from "react";
import { useOnlineStatus } from "@utils/useOnlineOffline";
import BaseNavigator from "./baseNavigator";
import Header from "@components/header/Header";
import { getTheme, setTheme } from "@utils/theme";
import { Toaster } from "react-hot-toast";

export default function App() {
  const isOnline = useOnlineStatus();

  useLayoutEffect(() => {
    setTheme(getTheme());
  }, []);

  return (
    <div className="bg-[var(--bg)] text-[var(--text)] min-h-screen">
      <Toaster />
      <Header />
      <BaseNavigator />
    </div>
  );
}

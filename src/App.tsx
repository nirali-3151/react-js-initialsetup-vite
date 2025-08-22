import { useEffect, useState } from "react";
import { useOnlineStatus } from "@utils/useOnlineOffline";
import BaseNavigator from "./baseNavigator";

export default function App() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <BaseNavigator />
    </div>
  );
}

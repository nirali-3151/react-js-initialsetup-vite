import { useEffect, useState } from "react";
import { useOnlineStatus } from "./utils/useOnlineOffline";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}

export default function App() {
  const [state, setState] = useState("");

  useEffect(() => {
    setState("abc");
    console.log("App component mounted");
  }, []);
  return <StatusBar />;
}

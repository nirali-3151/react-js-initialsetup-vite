import { useState } from "react";
import Button from "@components/button/Button";
import { toggleTheme, getTheme } from "@utils/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getTheme());

  const handleClick = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  const label = theme == "dark" ? "light" : "dark";

  return <Button variant="outline" label={label} onClick={handleClick} />;
}

"use client";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  return (
    <div>
      {theme === "dark" ? (
        <CiDark size={20} onClick={() => setTheme("light")} />
      ) : (
        <CiLight size={20} onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}

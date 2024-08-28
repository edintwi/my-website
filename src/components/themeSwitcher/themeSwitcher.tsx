"use client";
import { useTheme } from "next-themes";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  return (
    <div className="items-center justify-center">
      {theme === "dark" ? (
        <CiLight size={20} onClick={() => setTheme("light")} />
      ) : (
        <CiDark size={20} onClick={() => setTheme("dark")} />
      )}
    </div>
  );
}

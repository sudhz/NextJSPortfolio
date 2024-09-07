"use client";
import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { useTheme } from "next-themes";
import { FaCircle } from "react-icons/fa";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChangeTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  if (!mounted) {
    return <FaCircle className="w-12 h-12 opacity-10 animate-shimmer" />;
  }

  return (
    <label className="btn btn-ghost swap swap-rotate">
      <input
        type="checkbox"
        aria-label="theme-controller"
        className="theme-controller"
        onChange={onChangeTheme}
        checked={theme == "dark" ? true : false}
      />
      <SunIcon className="swap-on" />
      <MoonIcon className="swap-off" />
    </label>
  );
};

export default DarkModeToggle;

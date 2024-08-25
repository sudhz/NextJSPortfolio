"use client";
import { useEffect, useState } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { useTheme } from "next-themes";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const onChangeTheme = () => {
    console.log("theme changed", theme);
    setTheme(theme == "light" ? "dark" : "light");
  };

  if (!mounted)
    return <AiOutlineLoading3Quarters className="animate-spin w-12 h-12" />;

  return (
    <label className="btn btn-ghost swap swap-rotate">
      <input
        type="checkbox"
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

"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";
import logo from "@/public/smlogo.png";

const Logo = ({ className }: { className?: string }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <FaCircle className="w-20 h-20 opacity-10 animate-shimmer" />;
  }

  return (
    <Image
      alt="logo"
      src={logo}
      className={`${
        theme === "dark" ? "" : "invert"
      } w-20 ${className} transition-all ease-in-out`}
    />
  );
};

export default Logo;

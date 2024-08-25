"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Logo = ({ className }: { className?: string }) => {
  const { theme } = useTheme();
  console.log(theme);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <AiOutlineLoading3Quarters className="animate-spin w-20 h-20" />;
  }

  return (
    <Image
      alt="logo"
      src="/smlogo.png"
      width={80}
      height={80}
      className={`${
        theme === "dark" ? "" : "invert"
      } w-20 ${className} transition-all ease-in-out`}
    />
  );
};

export default Logo;

"use client";

import { useState } from "react";
import navStyles from "./navbar.module.css";
import { info } from "@/app/lib/info";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Toggler from "../../home/components/toggler";
import { Box } from "@mui/material";

const links = [
  { name: "Home", to: "/", active: "home" },
  { name: "About Me", to: "/about", active: "about" },
  { name: info.initials, type: "initials", to: "/", active: "home" },
  { name: "Portfolio", to: "/portfolio", active: "portfolio" },
];

interface NavbarProps {
  darkMode: boolean;
  handleClick: () => void;
}

export default function Navbar({ darkMode, handleClick }: NavbarProps) {
  const pathname = usePathname();
  const [active, setActive] = useState(
    pathname === "/" ? "home" : pathname.slice(1)
  );

  return (
    <Box component="nav" width="100%" className={navStyles.navContainer}>
      <Box
        component="ul"
        padding="0.5rem"
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap={{ xs: "2rem", md: "8rem" }}
        textTransform="lowercase"
        fontSize="1rem"
      >
        {links.map((link, index) => (
          <Box
            component="li"
            key={index}
            className={`${navStyles.navItem} ${
              link.active === active && !link.type ? navStyles.active : ""
            }`}
            style={{ borderImageSource: info.gradient }}
          >
            <Link
              href={link.to}
              onClick={() => setActive(link.active)}
              className={navStyles.link}
              replace
            >
              {!link.type && <p style={{ padding: "0.5rem 0" }}>{link.name}</p>}
              {link.type && <h1>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li className={navStyles.navItem}>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}

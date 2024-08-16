"use client";

import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Navbar from "./home/components/navbar";
import layoutStyles from "./layout.module.css";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    const oppositeOfCurrentDarkMode = !darkMode;
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    const darkMode = localStorage.getItem("darkMode") ?? "false";
    const detectedDarkMode = JSON.parse(darkMode);

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return (
    <Box className={darkMode ? layoutStyles.dark : layoutStyles.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          {children}
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            className={layoutStyles.footer}
            display={"flex"}
            flexDirection={"column"}
            fontSize={"0.5rem"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>
              template by{" "}
              <a href={"https://github.com/paytonjewell"}>Payton Pierce</a>
            </p>
            <p>&copy; 2024</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

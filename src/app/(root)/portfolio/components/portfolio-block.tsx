"use client";

import React from "react";
import IconLink from "./icon-link";
import { Box } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import { faSafari } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

interface PortfolioBlockProps {
  title: string;
  live: string;
  source: string;
  image: StaticImageData;
}

function PortfolioBlock({ image, live, source, title }: PortfolioBlockProps) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Image
        src={image}
        alt={"mockup"}
        priority
        style={{
          height: "auto",
        }}
      />
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Demo"} icon={faSafari} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={faCode} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;

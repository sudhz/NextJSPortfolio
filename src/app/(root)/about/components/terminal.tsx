import terminalStyles from "./terminal.module.css";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TerminalProps {
  text: JSX.Element;
}

function Terminal({ text }: TerminalProps) {
  return (
    <Box
      component={"section"}
      className={terminalStyles.shadowed}
      width={{ xs: "80%", md: "50%" }}
      borderRadius={"0.5rem"}
      mb={"4rem"}
    >
      <Box
        display={"flex"}
        sx={{ backgroundColor: "#8c8c8c" }}
        p={"0.5rem"}
        borderRadius={"0.5rem 0.5rem 0 0"}
        fontSize={"1rem"}
      >
        <FontAwesomeIcon
          icon={faCircle}
          className={`${terminalStyles.idiomatic} ${terminalStyles.idiomaticRed}`}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={`${terminalStyles.idiomatic} ${terminalStyles.idiomaticAmber}`}
        />
        <FontAwesomeIcon
          icon={faCircle}
          className={`${terminalStyles.idiomatic} ${terminalStyles.idiomaticGreen}`}
        />
      </Box>
      <Box
        py={{ xs: "1rem", md: "2rem" }}
        px={{ xs: "2rem", md: "3rem" }}
        borderRadius={"0 0 0.5rem 0.5rem"}
        sx={{ backgroundColor: "#27242f" }}
        fontSize={"1.0rem"}
        fontFamily={"Courier New, Courier, monospace"}
      >
        {text}
      </Box>
    </Box>
  );
}

export default Terminal;

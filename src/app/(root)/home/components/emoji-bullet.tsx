import { Box } from "@mui/material";
import emojiBulletStyles from "./emojiBullet.module.css";

interface EmojiBulletProps {
  emoji: string;
  text: string;
}

export default function EmojiBullet({ emoji, text }: EmojiBulletProps) {
  return (
    <Box
      component={"li"}
      className={emojiBulletStyles.emojiList}
      fontSize={"1rem"}
      lineHeight={1.5}
      style={{ cursor: "default" }}
    >
      <Box
        component={"span"}
        aria-label="cheese"
        role="img"
        mr={{ xs: "0.5rem", md: "1rem" }}
        fontSize={"1.5rem"}
      >
        {emoji}
      </Box>{" "}
      {text}
    </Box>
  );
}

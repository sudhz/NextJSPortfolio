import EmojiBullet from "./home/components/emoji-bullet";
import SocialIcon from "./home/components/social-icon";
import { Box } from "@mui/material";
import { info } from "@/app/lib/info";
import homeStyles from "./page.module.css";
import Image from "next/image";
import me from "@/app/lib/img/self.png";

export default function Home() {
  return (
    <Box
      component={"main"}
      display={"flex"}
      flexDirection={{ xs: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={"calc(100vh - 175px)"}
    >
      <Image
        className={homeStyles.shadowedImage}
        alt={"image of developer"}
        style={{ background: info.gradient }}
        width={400}
        height={400}
        src={me}
        priority
      />
      <Box>
        <h1 className={homeStyles.heading1}>
          Hi, I&apos;m{" "}
          <span
            style={{
              background: info.gradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {info.firstName}
          </span>
          <span className={homeStyles.hand}>🤚</span>
        </h1>
        <h2 className={homeStyles.heading2}>I&apos;m {info.position}.</h2>
        <Box component={"ul"} p={"0.8rem"}>
          {info.miniBio.map((bio, index) => (
            <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
          ))}
        </Box>
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"start"}
          fontSize={{ xs: "2rem", md: "2.5rem" }}
        >
          {info.socials.map((social, index) => (
            <SocialIcon
              key={index}
              link={social.link}
              icon={social.icon}
              label={social.label}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}

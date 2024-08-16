import aboutStyles from "./about.module.css";
import Terminal from "./components/terminal";
import { Box } from "@mui/material";
import { info } from "@/app/lib/info";

export default function About() {
  const firstName = info.firstName.toLowerCase();

  function aboutMeText() {
    return (
      <>
        <p className={aboutStyles.terminalParagraph}>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cat about{firstName}{" "}
        </p>
        <p className={aboutStyles.terminalParagraph}>
          <span style={{ color: info.baseColor }}>
            about{firstName} <span className={aboutStyles.green}>(main)</span> ${" "}
          </span>
        </p>
        <p
          className={aboutStyles.terminalParagraph}
          style={{ lineHeight: "1.25rem" }}
        >
          <a className={aboutStyles.terminalAnchor}>{info.bio}</a>
        </p>
      </>
    );
  }

  function experienceText() {
    return (
      <>
        <p className={aboutStyles.terminalParagraph}>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd experience
        </p>
        <p className={aboutStyles.terminalParagraph}>
          <span style={{ color: info.baseColor }}>
            experience <span className={aboutStyles.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        {info.experiences.map((experience, expIdx) => (
          <div key={expIdx}>
            <p
              className={aboutStyles.terminalParagraph}
              style={{ color: info.baseColor, lineHeight: "1.25rem" }}
            >
              {experience.company}
            </p>
            <p
              className={aboutStyles.terminalParagraph}
              style={{ color: info.baseColor, lineHeight: "1.25rem" }}
            >
              {experience.role}
            </p>
            <ul className={aboutStyles.experiences}>
              {experience.achievements.map((achievement, index) => (
                <li className={aboutStyles.experiencesListItem} key={index}>
                  &gt;&gt; <a>{achievement}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  }

  function skillsText() {
    return (
      <>
        <p className={aboutStyles.terminalParagraph}>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd skills/tools
        </p>
        <p className={aboutStyles.terminalParagraph}>
          <span style={{ color: info.baseColor }}>
            skills/tools <span className={aboutStyles.green}>(main)</span> $
          </span>{" "}
          ls
        </p>
        <p
          className={aboutStyles.terminalParagraph}
          style={{ color: info.baseColor }}
        >
          {" "}
          Proficient With
        </p>
        <ul className={aboutStyles.skills}>
          {info.skills.proficientWith.map((proficiency, index) => (
            <li className={aboutStyles.skillsListItem} key={index}>
              {proficiency}
            </li>
          ))}
        </ul>
        <p
          className={aboutStyles.terminalParagraph}
          style={{ color: info.baseColor }}
        >
          {" "}
          Exposed To
        </p>
        <ul className={aboutStyles.skills}>
          {info.skills.exposedTo.map((skill, index) => (
            <li className={aboutStyles.skillsListItem} key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </>
    );
  }

  function miscText() {
    return (
      <>
        <p className={aboutStyles.terminalParagraph}>
          <span style={{ color: info.baseColor }}>
            {firstName}
            {info.lastName.toLowerCase()} $
          </span>{" "}
          cd hobbies/interests
        </p>
        <p className={aboutStyles.terminalParagraph}>
          <span style={{ color: info.baseColor }}>
            hobbies/interests <span className={aboutStyles.green}>(main)</span>{" "}
            $
          </span>{" "}
          ls
        </p>
        <ul>
          {info.hobbies.map((hobby, index) => (
            <li className={aboutStyles.hobbiesListItem} key={index}>
              <Box component={"span"} mr={"1rem"}>
                {hobby.emoji}
              </Box>
              {hobby.label}
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal text={aboutMeText()} />
      <Terminal text={experienceText()} />
      <Terminal text={skillsText()} />
      <Terminal text={miscText()} />
    </Box>
  );
}

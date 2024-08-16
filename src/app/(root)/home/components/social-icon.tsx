"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import socialIconStyles from "./socialIcon.module.css";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface SocialIconProps {
  link: string;
  icon: IconDefinition;
  label: string;
}

export default function SocialIcon({ link, icon, label }: SocialIconProps) {
  return (
    <a
      className={socialIconStyles.anchor}
      target="_blank"
      aria-label={label}
      rel="noopener noreferrer"
      href={link}
      style={{
        paddingLeft: "0.5rem",
      }}
    >
      <FontAwesomeIcon icon={icon} aria-hidden />
    </a>
  );
}

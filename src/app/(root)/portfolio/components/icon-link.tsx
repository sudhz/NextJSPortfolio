"use client";

import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconLinkProps {
  link: string;
  title: string;
  icon: IconDefinition;
}

function IconLink({ link, title, icon }: IconLinkProps) {
  return (
    <a href={link} target={"_blank"} rel="noopener noreferrer">
      <FontAwesomeIcon icon={icon} /> {title}
    </a>
  );
}

export default IconLink;

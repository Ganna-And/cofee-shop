import React from "react";
import { useTranslations } from "../../../hooks/useData";
import { scrollToSection } from "../../../helperFunctions/scroll";

function HeadLeft() {
  const { translations } = useTranslations();
  const sectionsID = ["intro", "about", "menu", "news", "contact"];
  const homenav = translations.header.mainNav;

  console.log(homenav.map((item: any) => item.id));
  return (
    <nav className="header_part_container">
      {homenav.map((item: string, index: any) => (
        <a
          key={item}
          onClick={(e) => {
            e.preventDefault();
            scrollToSection(`#${sectionsID[index]}`);
          }}
          href={`#${sectionsID[index]}`}
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

export default HeadLeft;

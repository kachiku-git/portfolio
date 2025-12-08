import React from "react";
import Skills from "@/component/skills/Skills";

export default function SkillsPage() {
  return (
    <section>
      <Skills
        title="SKILL"
        items={[
          {
            skillsName: "HTML5",
            src: "/img/html5.svg",
            alt: "HTML5の画像",
          },
          { skillsName: "CSS3", src: "/img/css3.svg", alt: "CSS3の画像" },
          {
            skillsName: "SASS/SCSS",
            src: "/img/sass.svg",
            alt: "SASSの画像",
          },
          {
            skillsName: "JavaScript",
            src: "/img/js.svg",
            alt: "JavaScriptの画像",
          },
          {
            skillsName: "WordPress",
            src: "/img/WordPress.svg",
            alt: "WordPressの画像",
          },
          {
            skillsName: "React",
            src: "/img/react.svg",
            alt: "Reactの画像",
          },
          {
            skillsName: "TypeScript",
            src: "/img/typescript.svg",
            alt: "TypeScriptの画像",
          },
          {
            skillsName: "tailwind",
            src: "/img/tailwind.svg",
            alt: "tailwind.jsの画像",
          },
          {
            skillsName: "Next.js",
            src: "/img/next.js.svg",
            alt: "Next.jsの画像",
          },
          { skillsName: "PHP", src: "/img/php.svg", alt: "PHPの画像" },
          {
            skillsName: "Photoshop",
            src: "/img/Photoshop.svg",
            alt: "Photoshopの画像",
          },
          {
            skillsName: "Illustrator",
            src: "/img/Illustrator.svg",
            alt: "Illustratorの画像",
          },
          {
            skillsName: "Figma",
            src: "/img/figma.svg",
            alt: "Figmaの画像",
          },
        ]}
      />
    </section>
  );
}

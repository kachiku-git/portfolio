import React from "react";
import Icon from "@/component/icon/Icon";
import PText from "@/component/text/PText";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import IconSkills from "./IconSkills";

type SkillsProps = {
  items: SkillsItems[];
  title?: string;
};

type SkillsItems = {
  skillsName: string;
  skillsText?: string;
  src: string;
  alt: string;
};

export default function Skills({ items, title }: SkillsProps) {
  return (
    <section>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-12`}>
        <HTwoText className="my-8">{title}</HTwoText>
        <IconSkills items={items}></IconSkills>
      </div>
    </section>
  );
}

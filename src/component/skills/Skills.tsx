import React from "react";
import Icon from "@/component/icon/Icon";
import PText from "@/component/text/PText";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";

type SkillsProps = {
  items: SkillsItems[];
  title: string;
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <HTwoText className="my-8">{title}</HTwoText>
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center">
          {items.map((item) => (
            <div key={item.src} className="mx-auto m-8">
              <PText className="items-center">
                <Icon
                  className="mx-auto"
                  src={item.src}
                  alt={item.skillsName}
                />
              </PText>
              <HThreeText className="text-center">{item.skillsName}</HThreeText>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import HTwoText from "@/component/text/HTwoText";
import IconSkills from "./IconSkills";
import Link from "next/link";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 my-20">
        <HTwoText className="text-3xl font-bold">{title}</HTwoText>
        <IconSkills items={items}></IconSkills>
      </div>
    </section>
  );
}

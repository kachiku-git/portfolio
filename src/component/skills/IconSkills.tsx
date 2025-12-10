import Icon from "@/component/icon/Icon";
import PText from "@/component/text/PText";
import HThreeText from "@/component/text/HThreeText";

type IconSkillsProps = {
  items: SkillsItems[];
  className?: string;
};

type SkillsItems = {
  skillsName?: string;
  skillsText?: string;
  src: string;
  alt: string;
};

export default function Skills({ items, className }: IconSkillsProps) {
  return (
    <div
      className={`mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-center ${className}`}
    >
      {items.map((item) => (
        <div key={item.src} className="mx-auto m-8">
          <PText className="items-center">
            <Icon className="mx-auto" src={item.src} alt={item.skillsName} />
          </PText>
          <HThreeText className="text-center">{item.skillsName}</HThreeText>
        </div>
      ))}
    </div>
  );
}

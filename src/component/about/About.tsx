import dynamic from "next/dynamic";
import HTwoText from "@/component/text/HTwoText";
import TopAbout from "./TopAbout";
import PageAbout from "./PageAbout";

type AboutProps = {
  src: string;
  alt: string;
  birthplace: string;
  motto: string;
  career: string;
  isTop?: boolean;
};

export default function About({
  src,
  alt,
  birthplace,
  motto,
  career,
  isTop = false,
}: AboutProps) {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 my-20 ">
      <div className="p-4 sm:p-8 border-3 rounded-2xl">
        <HTwoText className="text-4xl font-bold text-center my-8">
          ABOUT
        </HTwoText>
        {isTop ? (
          <TopAbout
            src={src}
            alt={alt}
            birthplace={birthplace}
            motto={motto}
            career={career}
          />
        ) : (
          <PageAbout
            src={src}
            alt={alt}
            birthplace={birthplace}
            motto={motto}
            career={career}
          />
        )}
      </div>
    </section>
  );
}

import React from "react";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import Skills from "@/component/skills/Skills";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "../../../component/button/LinkButton";

export default function BannerPage() {
  return (
    <article>
      <div className="p-4 sm:p-8">
        <HTwoText className="text-3xl my-8 pb-2 sm:pb-4 border-b-3 border-black dark:border-white">
          バナー制作
        </HTwoText>
        <Image
          className="mx-auto mb-8 sm:mb-16 rounded-2xl"
          src="/img/works05.png"
          alt="バナーデザインの画像"
          width={800}
          height={800}
        />
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center my-8 sm:my-16 ">
            <LinkButton
              url="https://intp.site/2862/bnr/"
              className="flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined mr-2">
                open_in_new
              </span>
              WebSite
            </LinkButton>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-4 sm:mb-8">
              この作品の概要
            </HThreeText>
            <PText>
              イラストレーターとフォトショップを利用してのバナーデザイン制作を行いました。
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              URL :
            </HThreeText>
            <PText>
              サイトURL：
              <Link
                href="https://intp.site/2862/bnr/"
                target="_blank"
                rel="noopener"
              >
                https://intp.site/2862/bnr/
              </Link>
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              担当
            </HThreeText>
            <PText>デザイン・コーディング</PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              サイト作成期間
            </HThreeText>
            <PText>1日</PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              デザインについて
            </HThreeText>
            <PText>
              バナーの模写を通じて、イラストレーターやフォトショップの基本的な操作方法を学びました。
              <br />
              BijoudeとIQserverは授業での制作物で、他は自主模写作品になります。
              <br />
              模写では実際に自分で手を動かすことで、各ツールの使い方やデザインの基本原則を理解することができました。
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              コーディングに関して
            </HThreeText>
            <PText>
              作品ごとにタブで切り替えができるようにJavaScriptで実装を行いました。
              <br />
              またインターセクションオブザーバーを利用して、スクロールに応じてバナーがフェードインするような動きをつけました。
            </PText>
          </div>
          <Skills
            title="使用スキル"
            items={[
              {
                skillsName: "HTML5",
                src: "/img/html5.svg",
                alt: "HTML5の画像",
              },
              {
                skillsName: "CSS3",
                src: "/img/css3.svg",
                alt: "CSS3の画像",
              },
              {
                skillsName: "JavaScript",
                src: "/img/js.svg",
                alt: "JavaScriptの画像",
              },
              {
                skillsName: "Illustrator",
                src: "/img/Illustrator.svg",
                alt: "Illustratorの画像",
              },
              {
                skillsName: "Photoshop",
                src: "/img/Photoshop.svg",
                alt: "Photoshopの画像",
              },
            ]}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-16">
        <Link
          href="/../works/"
          className="flex justify-center items-center mx-auto p-4 rounded-4xl
                font-bold text-white  bg-amber-400 dark:bg-green-500 dark:border-white 
                hover:opacity-80 hover:scale-125 transition-all  duration-300"
        >
          <span className="material-symbols-outlined mr-2">
            desktop_windows
          </span>
          Works一覧へ
        </Link>
      </div>
    </article>
  );
}

import React from "react";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import Skills from "@/component/skills/Skills";
import Image from "next/image";
import Link from "next/link";
import Button from "@/component/button/Button";

export default function BannerPage() {
  return (
    <article>
      <div className="p-4 sm:p-8">
        <HTwoText className="mb-8 pb-2 sm:pb-4 sm:mb-16 border-b-3 border-black dark:border-white">
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
            <PText>
              GitHub：
              <Link href="#" target="_blank" rel="noopener">
                #
              </Link>
            </PText>
          </div>

          {/* 担当 */}
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              担当
            </HThreeText>
            <PText>デザイン・コーディング</PText>
          </div>

          {/* 作成期間 */}
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              サイト作成期間
            </HThreeText>
            <PText>1日</PText>
          </div>

          {/* デザインについて */}
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

          {/* コーディングに関して */}
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

          {/* 使用スキル */}
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
                src: "/img/css3.svg", // プロジェクトの実ファイル名に合わせてね
                alt: "CSS3の画像",
              },
              {
                skillsName: "JavaScript",
                src: "/img/js.svg",
                alt: "JavaScriptの画像",
              },
              {
                skillsName: "Illustrator",
                src: "/img/illustrator.svg",
                alt: "Illustratorの画像",
              },
              {
                skillsName: "Photoshop",
                src: "/img/photoshop.svg",
                alt: "Photoshopの画像",
              },
            ]}
          />
        </div>
      </div>

      <Button>
        <Link href="/works">Works一覧へ</Link>
      </Button>
    </article>
  );
}

import React from "react";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import Skills from "@/component/skills/Skills";
import Image from "next/image";
import Link from "next/link";
import Button from "@/component/button/Button";

export default function PrefecturesGamePage() {
  return (
    <article>
      <div className="p-4 sm:p-8">
        <HTwoText className="mb-8 pb-2 sm:pb-4 sm:mb-16 border-b-3 border-black dark:border-white">
          都道府県クイズゲーム
        </HTwoText>
        <Image
          className="mx-auto mb-8 sm:mb-16 rounded-2xl"
          src="/img/works01.jpg"
          alt="都道府県クイズゲームのデザイン画像"
          width={800}
          height={800}
        />

        <div className="max-w-4xl mx-auto">
          {/* 概要 */}
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-4 sm:mb-8">
              この作品の概要
            </HThreeText>
            <PText>
              React と TypeScript
              を使用して作成した、簡単な都道府県クイズゲームです。
              <br />
              授業で作成した JavaScript の簡単なゲームをベースに、
              より本格的なアプリケーションとして個人的に作り直しました。
            </PText>
          </div>

          {/* URL */}
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              URL :
            </HThreeText>
            <PText>
              サイトURL：
              <Link href="#" target="_blank" rel="noopener">
                #
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
            <PText>コーディング</PText>
          </div>

          {/* 作成期間 */}
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              サイト作成期間
            </HThreeText>
            <PText>1週間</PText>
          </div>

          {/* コーディングについて */}
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              コーディングについて
            </HThreeText>
            <PText>
              個人的に学習していた React と TypeScript
              を使って、実際にアプリケーションを作ってみたいと思い取り組みました。
              <br />
              <br />
              基本的な <code>useState</code> と <code>useEffect</code>{" "}
              に加えて、 選択した問題の状態を保持するために <code>useMemo</code>{" "}
              を使用したり、
              リザルト画面で「出題した問題数」と「正解した問題数」を表示するために{" "}
              <code>useLocation</code> を利用して画面間で情報を渡すなど、 React
              Hooks を組み合わせながら思い描いた挙動に近づけていきました。
              <br />
              <br />
              また、出題される問題が重複してしまう課題があったため、
              同じ問題が続けて出ないようにロジックを改善しました。
              さらに、ランダムな出題に偏りが出ないよう、
              できるだけ均等に都道府県が登場する仕組みも取り入れています。
            </PText>
          </div>

          {/* 使用スキル */}
          <Skills
            title="使用スキル"
            items={[
              {
                skillsName: "CSS3",
                src: "/img/css3.svg",
                alt: "sassの画像",
              },

              {
                skillsName: "TypeScript",
                src: "/img/typescript.svg",
                alt: "TypeScriptの画像",
              },
              {
                skillsName: "React",
                src: "/img/react.svg",
                alt: "Reactの画像",
              },
            ]}
          />
        </div>
      </div>
      <Button>
        <Link href="/../works/">Works一覧へ</Link>
      </Button>
    </article>
  );
}

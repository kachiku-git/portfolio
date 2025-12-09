import React from "react";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import Skills from "@/component/skills/Skills";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "../../../component/button/LinkButton";

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
          <div className="w-full sm:w-2/4 mx-auto h-auto flex flex-row justify-center items-centers my-8 sm:my-16 gap-4">
            <LinkButton
              url="https://github.com/kachiku-git/Prefectures-game"
              className="flex items-center justify-center cursor-pointer"
            >
              <Image
                className="mr-2"
                src="/img/github.png"
                alt="githubのアイコン"
                width={25}
                height={25}
              ></Image>
              GitHub
            </LinkButton>
            <LinkButton
              url="https://intp.site/2862/Prefecters_game/"
              className="flex items-center justify-center cursor-pointer"
            >
              <span className="material-symbols-outlined mr-2">
                desktop_windows
              </span>
              WebSite
            </LinkButton>
          </div>
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
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              URL : https://intp.site/2862/Prefecters_game/
            </HThreeText>
            <PText>
              サイトURL：
              <Link
                href="https://intp.site/2862/Prefecters_game/"
                target="_blank"
                rel="noopener"
              >
                https://intp.site/2862/Prefecters_game/
              </Link>
            </PText>
            <PText>
              GitHub：
              <Link
                href="https://github.com/kachiku-git/prefectures-game"
                target="_blank"
                rel="noopener"
              >
                https://github.com/kachiku-git/prefectures-game
              </Link>
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              担当
            </HThreeText>
            <PText>コーディング</PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              サイト作成期間
            </HThreeText>
            <PText>1週間</PText>
          </div>
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
              <br />
              <br />
              一番苦戦した点は、viteを使用してのデプロイ方法で、サーバーへのデプロイ時にパスがうまく通らず表示できない問題が発生しました。
              画像がうまく表示されない問題やページ遷移が正しく機能しない問題を解決するために、2日ほど試行錯誤しましたが、最終的にはうまく解決できました。
            </PText>
          </div>
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
      <div className="flex justify-center items-center mt-16">
        <LinkButton url="/../works/">Works一覧へ</LinkButton>
      </div>
    </article>
  );
}

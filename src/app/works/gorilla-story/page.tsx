import React from "react";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import Skills from "@/component/skills/Skills";
import Image from "next/image";
import Link from "next/link";
import Button from "@/component/button/Button";
import LinkButton from "../../../component/button/LinkButton";

export default function GorillaStoryPage() {
  return (
    <article>
      <div className="p-4 sm:p-8">
        <HTwoText className="text-3xl my-8 pb-2 sm:pb-4 border-b-3 border-black dark:border-white">
          ゴリラ物語
        </HTwoText>
        <Image
          className="mx-auto mb-8 sm:mb-16 rounded-2xl"
          src="/img/works03.jpg"
          alt="ゴリラ物語アプリケーションのデザイン画像"
          width={800}
          height={800}
        />
        <div className="max-w-4xl mx-auto">
          <div className="w-full sm:w-2/4 mx-auto h-auto flex flex-row justify-center items-centers my-8 sm:my-16 gap-4">
            <LinkButton
              url="https://github.com/kachiku-git/gorilla-styry"
              className="flex items-center justify-center cursor-pointer"
            >
              <Image
                className="mr-2"
                src="/img/github-white.png"
                alt="githubのアイコン"
                width={25}
                height={25}
              ></Image>
              GitHub
            </LinkButton>
            <LinkButton
              url="https://intp.site/2862/gorilla-story/"
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
              PHP
              の基礎的な使い方を習得するために作成した簡単なアプリケーションです。
              <br />
              「nanobanana」を使用して画像生成を行い、テキスト入力と組み合わせてストーリーを楽しめる構成にしました。
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              URL :
            </HThreeText>
            <PText>
              サイトURL：
              <Link
                href="https://intp.site/2862/gorilla-story/"
                target="_blank"
                rel="noopener"
              >
                https://intp.site/2862/gorilla-story/
              </Link>
            </PText>
            <PText>
              GitHub：
              <Link
                href="https://github.com/kachiku-git/gorilla-styry"
                target="_blank"
                rel="noopener"
              >
                https://github.com/kachiku-git/gorilla-styry
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
            <PText>6時間</PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              コーディングについて
            </HThreeText>
            <PText>
              入力された内容を画面上に反映させる処理を実装し、一部の表示内容はランダムに変化するようにしました。
              <br />
              PHP
              を使ったフォーム送信や条件分岐の基礎を押さえつつ、簡単な遊び要素を加えることで、楽しく学べる構成を意識しています。
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              こだわりポイント
            </HThreeText>
            <PText>
              ユーザーの画面サイズや環境によって表示領域が変わることを踏まえ、背景画像にベースとなる画像を配置しました。
              <br />
              どのデバイスから見てもストーリーの世界観が伝わるように、背景で雰囲気を支えつつ、テキストや生成画像が見やすくなるようバランスを調整しています。
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
                skillsName: "SCSS",
                src: "/img/sass.svg",
                alt: "sassの画像",
              },
              {
                skillsName: "php",
                src: "/img/php.svg",
                alt: "phpの画像",
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

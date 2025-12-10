import React from "react";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import Skills from "@/component/skills/Skills";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "@/component/button/LinkButton";
import IconSkills from "@/component/skills/IconSkills";

export default function MyDashboardPage() {
  return (
    <article>
      <div className="p-4 sm:p-8">
        <div className="w-full h-auto pb-4 md:pb-0 md:px-8 my-8 md:flex md:flex-rew md:items-center md:justify-around  border-b-3 border-black dark:border-white">
          <HTwoText className="w-full text-4xl">MY Dashboard</HTwoText>
          <IconSkills
            className="hidden sm:flex w-full h-auto scale-75"
            items={[
              {
                skillsName: "SCSS",
                src: "/img/sass.svg",
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
        <Image
          className="mx-auto mb-8 sm:mb-16 rounded-2xl"
          src="/img/works04.png"
          alt="My Dashboard アプリケーションのデザイン画像"
          width={800}
          height={800}
        />
        <div className="max-w-4xl mx-auto">
          <div className="w-full sm:w-2/4 mx-auto h-auto flex flex-row justify-center items-centers my-8 sm:my-16 gap-4">
            <LinkButton
              url="https://github.com/kachiku-git/my-dashboard"
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
              url="https://my-dashboard-five-blush.vercel.app/"
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
              API
              を使用したアプリケーションの作成と、ローカルにデータを保存できる
              タスク管理アプリケーションとして制作しました。
              <br />
              天気・時計・タスクをひとつの画面にまとめ、ブラウザだけで日々の管理が
              完結することを目指しています。
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              URL :
            </HThreeText>
            <PText>
              サイトURL：
              <Link
                href="https://my-dashboard-five-blush.vercel.app/"
                target="_blank"
                rel="noopener"
              >
                https://intp.site/2862/my-Dashboard/
              </Link>
            </PText>
            <PText>
              GitHub：
              <Link
                href="https://github.com/kachiku-git/my-dashboard"
                target="_blank"
                rel="noopener"
              >
                https://github.com/kachiku-git/my-dashboard
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
            <PText>1週間</PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              制作の背景
            </HThreeText>
            <PText>
              普段から Notion を利用していますが、カレンダーやタスク、メモなど
              さまざまな機能を連携していると、
              「もっとシンプルにタスクだけを管理したい」と感じることがありました。
              <br />
              <br />
              Notion
              でタスクページを開いたりビューを切り替えたりする手間を減らし、
              ブラウザを開くだけで今日やることがすぐに確認できるような、
              軽くてシンプルなダッシュボードが欲しいと思い、このアプリを制作しました。
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              コーディングについて
            </HThreeText>
            <PText>
              天気情報は OpenWeather から API キーを発行してデータを取得し、
              地域ごとに天気を表示できるようにしました。
              <br />
              最高気温・最低気温・体感温度を表示し、現在の天気に応じたアイコンも
              表示されるように実装しています。
              <br />
              <br />
              時計はローカル PC の時刻を取得してリアルタイムに表示しています。
              <br />
              <br />
              タスク機能の実装がもっとも大変な部分でした。
              ステータスごとに表示するタスクを切り替えできるようにしつつ、
              ステータス切り替え時にタスク表示が崩れてしまうバグの解消に苦労しました。
              <br />
              ローカルストレージにタスク情報を保存し、ページを再読み込みしても
              状態が保たれるようにすることで、日常的に使えるタスク管理として
              仕上げています。
            </PText>
          </div>
          <Skills
            title="使用スキル"
            items={[
              {
                skillsName: "SCSS",
                src: "/img/sass.svg",
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

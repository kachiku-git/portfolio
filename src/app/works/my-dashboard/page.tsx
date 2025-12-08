import React from "react";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import Skills from "@/component/skills/Skills";
import Image from "next/image";
import Link from "next/link";
import Button from "@/component/button/Button";

export default function MyDashboardPage() {
  return (
    <article>
      <div className="p-4 sm:p-8">
        <HTwoText className="mb-8 pb-2 sm:pb-4 sm:mb-16 border-b-3 border-black dark:border-white">
          My Dashboard
        </HTwoText>
        <Image
          className="mx-auto mb-8 sm:mb-16 rounded-2xl"
          src="/img/works04.png"
          alt="My Dashboard アプリケーションのデザイン画像"
          width={800}
          height={800}
        />

        <div className="max-w-4xl mx-auto">
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
      <Button>
        <Link href="/../works/">Works一覧へ</Link>
      </Button>
    </article>
  );
}

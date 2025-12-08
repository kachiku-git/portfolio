import React from "react";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import Skills from "@/component/skills/Skills";
import Image from "next/image";
import Link from "next/link";
import Button from "@/component/button/Button";

export default function sundayFlowerPage() {
  return (
    <article>
      <div className="p-4 sm:p-8">
        <HTwoText className="mb-8 pb-2 sm:pb-4 sm:mb-16 border-b-3 border-black dark:border-white">
          Sunday Flower
        </HTwoText>
        <Image
          className="mx-auto mb-8 sm:mb-16 rounded-2xl"
          src="/img/works02.jpg"
          alt="Sunday Flowerのデザイン画像"
          width={800}
          height={800}
        />
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-4 sm:mb-8">
              この作品の概要
            </HThreeText>
            <PText>
              訓練校でヒアリング内容を元に作成した架空の花屋のサイトです。
              <br />
              どの年齢や性別の方でも、シンプルにオシャレと感じていただけるサイトを意識しました。
            </PText>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              URL :
            </HThreeText>
            <PText>
              サイトURL：
              <Link
                href="https://intp.site/2862/sundayflower/"
                target="_blank"
                rel="noopener"
              >
                https://intp.site/2862/sundayflower/
              </Link>
            </PText>
            <PText>
              GitHub：
              <Link
                href="https://github.com/kachiku-git/sunday-flower"
                target="_blank"
                rel="noopener"
              >
                https://github.com/kachiku-git/sunday-flower
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
            <HThreeText className="border-l-3 pl-2 mb-4 sm:mb-8">
              要件内容
            </HThreeText>
            <dl className="grid grid-cols-[120px_minmax(0,1fr)] gap-x-4 gap-y-3 sm:gap-y-4">
              <dt className="font-semibold">顧客名</dt>
              <dd>株式会社日本生花</dd>

              <dt className="font-semibold">事業内容</dt>
              <dd>
                ・法人向けの生花の販売。冠婚葬祭用の祭壇を始めとしたステージ演出
                <br />
                ・一般向けのフラワーショップ
              </dd>

              <dt className="font-semibold">ヒアリング相手</dt>
              <dd>代表取締役社長 花屋満開 様（仮名）</dd>

              <dt className="font-semibold">ヒアリング内容</dt>
              <dd className="col-span-2 mt-1 sm:mt-2 pl-2 border-l">
                <span className="block h-2 mt-4 font-semibold">概要</span>
                <br />
                今年から、先代の社長から会社を引き継ぎました。
                今までは、法人向けの生花の販売しか行って来なかったのですが、
                一般向けのフラワーショップを、今年からオープンする事になり、
                〇〇駅から徒歩４分の所に店舗を構えました。
                <br />
                <span className="block h-2 mt-4 font-semibold">依頼内容</span>
                <br />
                今回は、そのフラワーショップのホームページをお願いしたいです。
                基本的には、一般のお客様にsunday flowerを知っていただいて、
                集客につなげていきたいです。おしゃれ、それでいてハードルの高さを感じない
                アットホームな雰囲気を出していただきたいです。
                <br />
                <span className="block h-2 mt-4 font-semibold">お店の名前</span>
                <br />
                お店の名前は、sunday flower。
                お客様に日曜日の楽しさの様な、幸せな気持ちを届けたくてつけた名前です。
                <br />
                <span className="block h-2 mt-4 font-semibold">
                  取り扱っているもの
                </span>
                <br />
                チューリップやバラなどの一般的な生花をはじめ、
                季節に応じて用意する生花の種類を変えていこうと思っています。
                また、生花だけではなく、プリザーブドフラワーやソープフラワーや
                ハーバリウムを使ったギフトなども販売していきたいと思っています。
                <br />
                <span className="block h-2 mt-4 font-semibold">
                  ホームページ制作についての要望
                </span>
                <br />
                ロゴマークがまだないので、作っていただきたいです。
                そのロゴで、名刺なども作りたいと考えています。
                お店のブランドカラーなど、特に決まっていないので、
                決めていただいて問題ありません。
                スマホでサイトを見る人が多いと思うので、
                スマホ対応していただきたいです。
              </dd>
            </dl>
          </div>
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-4 sm:mb-8">
              要件内容に対してのアプローチ
            </HThreeText>
            <PText className="mb-4 sm:mb-8">
              いただいた要件に対してまとめ、読み取れた内容。
            </PText>
            <div className="mb-4 sm:mb-8 space-y-2">
              <PText className="font-semibold">
                1:
                売り上げを上げるために商品購入につながるサイト作成をして欲しい
              </PText>
              <PText className="font-semibold">
                2: お客様や取引先との折衝の際に 「えっ// カワイイ
                //」と思われる万人受けするロゴやサイトデザインを作って欲しい
              </PText>
            </div>
            <div className="space-y-6">
              <PText>
                <span className="block font-semibold mb-2">
                  売り上げにつながるサイト構造についての考え方
                </span>
                依頼主はもともと法人向けの生花事業（冠婚葬祭・ステージ演出など）を中心としており、
                一般顧客向けの店舗は新規事業としてスタートした背景があります。
                そのため、既存の法人事業で培った強みをそのままtoCに転用できる導線を意識しました。
                <br />
                <br />
                まず、ブライダルページを設けることで、法人向けに行ってきた演出業務を
                「一般顧客の特別な日」に使ってもらう提案ができると考えました。
                また、法人事業で既に配送体制があると想定し、ECによるギフト商品の注文フローも
                サイトからスムーズにつながる構成にしています。
                <br />
                <br />
                売り上げの中心になると考えたのはギフト・ブライダル・スクールの3本柱です。
                ギフトは日常的な購入、ブライダルは高単価、スクールは地域密着で継続的な売り上げになる、
                という役割を整理したうえで、ユーザーがスクロールしながら自然と次のサービスに
                興味を持てるページ遷移を設計しました。
              </PText>
              <PText>
                <span className="block font-semibold mb-2">
                  ブランドロゴ・カラー設計についての考え方
                </span>
                売り上げ向上が目的であるため、第一に「親しみやすさと万人受け」を大切にしました。
                顧客ターゲットは女性が中心ですが、ブライダルでは男性も来訪し、
                スクールでは地域の幅広い層が利用する可能性があります。
                そのため、女性的なイメージに寄せすぎず、誰でもアクセスしやすいニュートラルな色合いを採用しています。
                <br />
                <br />
                ブランドコンセプトである「日曜日のような小さな幸せを届ける」という想いを表現するため、
                ロゴにはこれから花を咲かせる芽をモチーフにした2葉を採用しました。
                お客様ひとりひとりに違う幸せが咲くイメージを込めています。
                <br />
                <br />
                カラーは店名の「sunday
                flower」から太陽・ひまわりを想起させる黄色を基調に、
                ロゴで用いたやわらかいグリーンをアクセントカラーとして使用しました。
                フォントは「おしゃれ ×
                親しみやすい」という要望に合わせてトーンを揃えています。
                <br />
                <br />
                MV（メインビジュアル）は高さを80vhに設定し、その直下にナビゲーションを配置することで、
                初めて訪れたユーザーでも迷わず目的の情報へ移動できるようにしました。
                また、各ページのトップにはタイトルを重ねて表示し、自分が今どのページにいるのかを把握しやすくしています。
                スマホ表示は構成をシンプルにし、ハンバーガーメニューを常時表示することで、操作に迷わないUIを意識しました。
              </PText>
            </div>
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
                skillsName: "javaScript",
                src: "/img/js.svg",
                alt: "javaScriptの画像",
              },
              {
                skillsName: "illustrator",
                src: "/img/illustrator.svg",
                alt: "illustratorの画像",
              },
              {
                skillsName: "php",
                src: "/img/php.svg",
                alt: "phpの画像",
              },
            ]}
          />
          <div className="mb-4 sm:mb-8">
            <HThreeText className="border-l-3 pl-2 mb-2 sm:mb-4">
              コーディングについて
            </HThreeText>
            <PText>
              loading画面は「画面が表示されているのか？それとも読み込み中なのか？がわからない」
              そんな声も年齢層が高い方に多かったので、今回は実装しませんでした。
              <br />
              特にこだわったのはグローバルナビゲーションになり、背景を透過させてオシャレな感じを演出した事と、角を斜めにしてナビゲーションっぽさを実装した事です。
              <br />
              また、少しでも制作速度を上げたかったので、ビルドツールのviteをWEBサイト制作に使用しました。
            </PText>
          </div>
        </div>
      </div>
      <Button>
        <Link href="/../works/">Works一覧へ</Link>
      </Button>
    </article>
  );
}

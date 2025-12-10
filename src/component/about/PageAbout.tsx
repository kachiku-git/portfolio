"use client";
import Image from "next/image";
import HTwoText from "@/component/text/HTwoText";
import HThreeText from "@/component/text/HThreeText";
import PText from "@/component/text/PText";
import ScrollFadeIn from "../scroll-fade-in/ScrollFadeIn";
import Link from "next/link";

type PageAboutProps = {
  src: string;
  alt: string;
  birthplace: string;
  motto: string;
  career: string;
};

export default function PageAbout({ src, alt }: PageAboutProps) {
  return (
    <>
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-12 my-20">
        <ScrollFadeIn>
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="shrink-0">
              <Image
                src={src}
                alt={alt}
                width={220}
                height={220}
                className="rounded-2xl object-cover"
              />
            </div>
            <div>
              <HTwoText className="text-3xl sm:text-4xl font-bold mb-2">
                Keita Fujiwara
              </HTwoText>
              <PText className="font-bold mb-2 text-amber-500 dark:text-green-400">
                フロントエンドエンジニア志望
              </PText>
              <PText className="mb-2">岡山県出身。</PText>
              <PText>「納得できるものを、届ける」が仕事のスタンスです。</PText>
            </div>
          </div>
        </ScrollFadeIn>

        {/* ===== TIMELINE ===== */}
        <section className="mt-20">
          <HThreeText className="font-bold mb-8">こんな人生でした</HThreeText>
          <div className="relative border-l-2 border-amber-400 dark:border-green-400 pl-6 space-y-8">
            {/* 1 */}
            <ScrollFadeIn>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-amber-400 dark:bg-green-400" />
                  <PText className="text-xs sm:text-sm font-bold text-gray-500">
                    新卒〜20代前半
                  </PText>
                </div>
                <PText className="font-bold mb-1">新聞配達・販促業務</PText>
                <PText className="text-sm sm:text-base">
                  早朝からの配達と販促業務を通して、「決まった時間に決まった成果を出す」という
                  仕事の基本と体力を身につけました。経理業務にも携わり、税理士の方と打ち合わせをしたり貴重な経験をしました。
                </PText>
              </div>
            </ScrollFadeIn>

            {/* 2 */}
            <ScrollFadeIn>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-amber-400 dark:bg-green-400" />
                  <PText className="text-xs sm:text-sm font-bold text-gray-500">
                    20代中盤
                  </PText>
                </div>
                <PText className="font-bold mb-1">
                  KDDI 系商材の法人営業（アウトバウンド）
                </PText>
                <PText className="text-sm sm:text-base">
                  オフィス機器や法人携帯などのオフィスビルにある物全般のアウトバンドを担当。
                  数字に向き合い続ける姿勢を鍛えました。
                </PText>
              </div>
            </ScrollFadeIn>

            {/* 3 */}
            <ScrollFadeIn>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-amber-400 dark:bg-green-400" />
                  <PText className="text-xs sm:text-sm font-bold text-gray-500">
                    20代後半
                  </PText>
                </div>
                <PText className="font-bold mb-1">
                  インフラ系商材・SaaS・求人サービスのインサイドセールス
                </PText>
                <PText className="text-sm sm:text-base">
                  新電力・ガス・インターネット回線・ウォーターサーバー、SaaS、
                  求人サービスなど幅広い商材を担当。スクリプトやトーク設計、
                  数字管理、メンバー育成など、リーダーとしてチームの成果をつくる側に回りました。
                </PText>
              </div>
            </ScrollFadeIn>

            {/* 4 */}
            <ScrollFadeIn>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-amber-400 dark:bg-green-400" />
                  <PText className="text-xs sm:text-sm font-bold text-gray-500">
                    30代前半
                  </PText>
                </div>
                <PText className="font-bold mb-1">
                  EC 倉庫のフルフィルメント・現場マネジメント
                </PText>
                <PText className="text-sm sm:text-base">
                  入出荷オペレーションの設計、夜勤立ち上げ、スポットワーカー最大
                  100 名規模の シフト・労務管理、KGI・KPI
                  に基づく進捗管理の仕組みづくりを担当。
                  「人が動く現場」と「数字」をつなぐ役割を担いました。
                </PText>
              </div>
            </ScrollFadeIn>

            {/* 5 */}
            <ScrollFadeIn>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="inline-block w-3 h-3 rounded-full bg-amber-400 dark:bg-green-400" />
                  <PText className="text-xs sm:text-sm font-bold text-gray-500">
                    現在
                  </PText>
                </div>
                <PText className="font-bold mb-1">
                  Web / フロントエンド学習 ＋ ポートフォリオ制作
                </PText>
                <PText className="text-sm sm:text-base">
                  職業訓練校と独学で、HTML / CSS / JavaScript / TypeScript /
                  React / Next.js
                  を学習中。実務をイメージしたポートフォリオサイトやダッシュボード、
                  クイズアプリなどを制作しながら、設計〜実装まで一貫して手を動かしています。
                </PText>
              </div>
            </ScrollFadeIn>
          </div>
        </section>

        {/* ===== WHY IT & VALUE ===== */}
        <section className="why-it-section mt-20 space-y-10">
          <ScrollFadeIn>
            <div className="why-it-block">
              <HThreeText className="font-bold mb-4">
                なぜ、IT・フロントエンドへ？
              </HThreeText>
              <PText className="mb-4">
                SaaS 商材を扱う中で、API や NFC などの技術に触れ、
                「このサービスの裏側では、どんな仕組みが動いているんだろう？」という興味が
                強くなったことが最初のきっかけでした。
              </PText>
              <PText className="mb-4">
                その後、AI 時代のキャリアを考える中で Web
                マーケティングを学び始め、
                「自分で手を動かして、目の前で動くものをつくる」フロントエンド開発に強く惹かれるようになりました。
              </PText>
              <PText>
                これまでの営業・マネジメント経験を活かしつつ、ユーザーやクライアントに近い立場で
                要件定義や提案もできるフロントエンドエンジニアとして、
                納得感のあるプロダクトづくりに関わっていきたいと考えています。
              </PText>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <div className="why-it-block">
              <HThreeText className="font-bold mb-4">
                仕事で大事にしていること
              </HThreeText>
              <PText className="mb-4">
                仕事を選ぶうえで一番大事にしているのは、
                「自分もお客様も納得できるかどうか」です。営業時代から、
                本当におすすめできる商材でないと結果的に続かないことを痛感してきました。
              </PText>
              <PText className="mb-4">
                また、KGI・KPI
                から必要な行動量を逆算してタスクに落とし込むなど、
                ロジックで物事を組み立てることが得意です。
                その一方で、完璧主義な一面もあるため、「まず形にしてから改善する」ことを意識して動いています。
              </PText>
              <PText>
                「ちゃんと考えて、ちゃんと手を動かす」。
                そんなスタンスで、これからはプロダクトづくりの現場に関わっていきたいと思っています。
              </PText>
            </div>
          </ScrollFadeIn>
        </section>
      </section>
      <div className="flex justify-center items-center mt-4 sm:mt-8">
        <Link
          href="/contact/"
          className="flex justify-center items-center mx-auto p-4 rounded-4xl
                font-bold text-white  bg-amber-400 dark:bg-green-500 dark:border-white 
                hover:opacity-80 hover:scale-125 transition-all  duration-300"
        >
          <span className="material-symbols-outlined mr-2">mail</span>
          CONTACT
        </Link>
      </div>
    </>
  );
}

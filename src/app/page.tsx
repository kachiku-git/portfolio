import React from "react";
import Works from "@/component/works/Works";
import About from "@/component/about/About";
import Contact from "../component/contact/Contact";

export default function TopPage() {
  return (
    <>
      <section>
        <Works
          title="WORKS"
          isSwiper={true}
          items={[
            {
              worksName: "都道府県ゲーム",
              src: "/img/works01.jpg",
              alt: "都道府県ゲームの画像",
              href: "pref-game",
            },
            {
              worksName: "sunday flower",
              src: "/img/works02.jpg",
              alt: "サンデーフラワーの画像",
              href: "sunday-flower",
            },
            {
              worksName: "ゴリラ物語",
              src: "/img/works03.jpg",
              alt: "ゴリラ物語の画像",
              href: "gorilla-story",
            },
            {
              worksName: "my-dashboard",
              src: "/img/works04.png",
              alt: "my-dashboardの画像",
              href: "my-dashboard",
            },
            {
              worksName: "バナー作品",
              src: "/img/works05.png",
              alt: "バナー作品の画像",
              href: "banner",
            },
          ]}
        ></Works>
        <About
          isTop={true}
          src="/img/mp.JPG"
          alt="プロフィール画像"
          birthplace="岡山県"
          motto="人間万事塞翁が馬"
          career="高校を卒業後、就職に伴い上京。その後、役者として活動をした後に営業職に従事。数年後にフリーランスとして活動。SASS商材のBPO案件に従事している際に、ITへの知識不足と同時に魅力を感じWEB業界に転向を意識する。"
        ></About>
        <Contact isTop={true} />
      </section>
    </>
  );
}

import Works from "@/component/works/Works";

export default function WorksPage() {
  return (
    <>
      <Works
        title="WORKS"
        isSwiper={false}
        items={[
          {
            worksName: "都道府県ゲーム",
            worksInfo: "Application",
            src: "/img/works01.jpg",
            alt: "都道府県ゲームの画像",
            href: "pref-game",
          },
          {
            worksName: "sunday flower",
            worksInfo: "WebSite(Responsive)",
            src: "/img/works02.jpg",
            alt: "サンデーフラワーの画像",
            href: "sunday-flower",
          },
          {
            worksName: "ゴリラ物語",
            worksInfo: "Application",
            src: "/img/works03.jpg",
            alt: "ゴリラ物語の画像",
            href: "gorilla-story",
          },
          {
            worksName: "my-dashboard",
            worksInfo: "Application",
            src: "/img/works04.png",
            alt: "my-dashboardの画像",
            href: "my-dashboard",
          },
          {
            worksName: "バナー作品",
            worksInfo: "Design",
            src: "/img/works05.png",
            alt: "バナー作品の画像",
            href: "banner",
          },
        ]}
      />
    </>
  );
}

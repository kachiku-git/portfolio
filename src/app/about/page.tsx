import About from "@/component/about/About";

export default function AboutPage() {
  return (
    <>
      <About
        isTop={false}
        src="/img/mp.JPG"
        alt="プロフィール画像"
        birthplace="岡山県"
        motto="人間万事塞翁が馬"
        career="高校を卒業後、就職に伴い上京。その後、役者として活動をした後に営業職に従事。数年後にフリーランスとして活動。SASS商材のBPO案件に従事している際に、ITへの知識不足と同時に魅力を感じWEB業界に転向を意識する。"
      />
    </>
  );
}

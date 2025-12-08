import HOneText from "@/component/text/HOneText";
import NavArea from "../nav-area/NavArea";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  className?: string;
};

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`w-full h-auto ${className}`}>
      <div className="mx-auto grid grid-cols-[2fr_1fr] items-center sm:flex sm:flex-col sm:gap-8">
        <HOneText className="font-bold text-3xl sm:p-8">
          <Link href="/">
            <Image src="/img/logo.svg" alt="Logo" width={50} height={50} />
            KEITA FUJIWARA
          </Link>
        </HOneText>
        <NavArea
          items={[
            { label: "HOME", href: "/", icon: "home" },
            { label: "WORKS", href: "/works", icon: "desktop_windows" },
            { label: "SKILL", href: "/skills", icon: "auto_stories" },
            { label: "ABOUT", href: "/about", icon: "person" },
            { label: "CONTACT", href: "/contact/", icon: "mail" },
          ]}
          className="p-8"
        />
      </div>
    </header>
  );
}

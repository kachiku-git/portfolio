import React from "react";
import HTwoText from "../text/HTwoText";
import HThreeText from "../text/HThreeText";
import PText from "../text/PText";
import Link from "next/link";
import Image from "next/image";

type ContactProps = {
  isTop?: boolean;
};

export default function Contact({ isTop = false }: ContactProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 my-20 text-center">
        <HTwoText className=" text-2xl font-bold  inline-block text-white  bg-amber-400 dark:bg-green-500 px-8">
          CONTACT
        </HTwoText>
        <PText className="text-center font-bold my-8">
          お問い合わせ先
          <br />
          SNSかメールにてお願いいたします。
        </PText>
        {isTop ? (
          <div>
            <HThreeText>トップの時のタイトル</HThreeText>
            <div className="flex flex-row justify-center items-center mx-auto text-center">
              <Link
                className="block p-4 sm:p-8"
                href="https://github.com/kachiku-git"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src="/img/github.png"
                  alt="githubのアイコン"
                  width={50}
                  height={50}
                ></Image>
                <span>GitHab</span>
              </Link>
              <Link
                className="block p-4 sm:p-8"
                href="https://github.com/kachiku-git"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src="/img/github.png"
                  alt="githubのアイコン"
                  width={50}
                  height={50}
                ></Image>
                <span>GitHab</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <HThreeText>pageの時のタイトル</HThreeText>
            <div className="flex flex-row justify-center items-center mx-auto text-center">
              <Link
                className="block p-4 sm:p-8"
                href="https://github.com/kachiku-git"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src="/img/github.png"
                  alt="githubのアイコン"
                  width={50}
                  height={50}
                ></Image>
                <span>GitHab</span>
              </Link>
              <Link
                className="block p-4 sm:p-8"
                href="https://github.com/kachiku-git"
                target="_blank"
                rel="noopener"
              >
                <Image
                  src="/img/github.png"
                  alt="githubのアイコン"
                  width={50}
                  height={50}
                ></Image>
                <span>GitHab</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

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
        <PText className="text-center font-bold my-16">
          お問い合わせ先
          <br />
          SNSかメールにてお願いいたします。
        </PText>
        {isTop ? (
          <>
            <div>
              <div className="flex flex-row justify-center items-center mx-auto text-center gap-8 m-4 md:m-8">
                <Link
                  className="block p-4 sm:p-8 hover:opacity-80 hover:scale-125 transition-all  duration-300 rounded-full text-white  dark:bg-amber-400 bg-green-500 dark:border-white"
                  href="https://github.com/kachiku-git"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/img/github-white.png"
                    alt="githubのアイコン"
                    width={50}
                    height={50}
                  ></Image>
                  <span>GitHab</span>
                </Link>
                <Link
                  className="block p-4 sm:p-8 hover:opacity-80 hover:scale-125 transition-all  duration-300 rounded-full text-white  dark:bg-amber-400 bg-green-500 dark:border-white"
                  href="mailto:fuji0syaru0@gmail.com?subject=portfolioからの問い合わせ&body=ポートフォリオを見て連絡しました。%0D%0A お問い合わせ内容 :%0D%0A"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/img/send-mail.png"
                    alt="送信メールのアイコン"
                    width={50}
                    height={50}
                  ></Image>
                  <span>Mail</span>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Link
                href="/works"
                className="flex justify-center items-center mx-auto p-4 rounded-4xl
             font-bold text-white  bg-amber-400 dark:bg-green-500 dark:border-white 
             hover:opacity-80 hover:scale-125 transition-all  duration-300"
              >
                <span className="material-symbols-outlined mr-2">
                  desktop_windows
                </span>
                WORKS一覧へ
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="mt-32 md:inline-flex md:flex-col items-center md:w-2/5 md:h-auto md:p-16 md:border-4 md:rounded-2xl">
              <div className="flex md:flex-row justify-center items-center mx-auto text-center gap-8">
                <Link
                  className="block p-4 sm:p-8 hover:opacity-80 hover:scale-125 transition-all  duration-300 font-bold rounded-full text-white  dark:bg-amber-400 bg-green-500 dark:border-white "
                  href="https://github.com/kachiku-git"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/img/github-white.png"
                    alt="githubのアイコン"
                    width={50}
                    height={50}
                  ></Image>
                  <span>GitHab</span>
                </Link>
                <Link
                  className="block p-4 sm:p-8 hover:opacity-80 hover:scale-125 transition-all  duration-300 font-bold rounded-full text-white  dark:bg-amber-400 bg-green-500 dark:border-white "
                  href="mailto:fuji0syaru0@gmail.com?subject=portfolioからの問い合わせ&body=ポートフォリオを見て連絡しました。%0D%0Aお問い合わせ内容を入力してください :%0D%0A"
                  target="_blank"
                  rel="noopener"
                >
                  <Image
                    src="/img/send-mail.png"
                    alt="送信メールのアイコン"
                    width={50}
                    height={50}
                  ></Image>
                  <span>Mail</span>
                </Link>
              </div>
              <div className="flex justify-center items-center mt-16">
                <Link
                  href="/"
                  className="flex justify-center items-center mx-auto p-4 rounded-4xl
                font-bold text-white  bg-amber-400 dark:bg-green-500 dark:border-white 
                md:hover:opacity-80  md:hover:scale-x-80 md:hover:scale-y-200 md:transition-all  md:duration-100"
                >
                  <span className="material-symbols-outlined mr-2">home</span>
                  HOMEへ
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

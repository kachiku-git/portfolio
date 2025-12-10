"use client";
import React from "react";
import Image from "next/image";
import PText from "@/component/text/PText";
import Link from "next/link";
type TopAboutProps = {
  src: string;
  alt: string;
  birthplace: string;
  motto: string;
  career: string;
};

export default function TopAbout({
  src,
  alt,
  birthplace,
  motto,
  career,
}: TopAboutProps) {
  return (
    <div>
      <div className="sm:max-w-2/3 p-8 mx-auto flex flex-col md:flex-row items-center gap-16 ">
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="rounded-2xl"
        />
        <div className="profile-body">
          <PText className="font-bold mb-2">出身地: {birthplace}</PText>
          <PText className="font-bold mb-4">座右の銘: {motto}</PText>
          <PText className="font-bold mb-2">~略歴~</PText>
          <PText className="font-bold mb-4">{career}</PText>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4 sm:mt-8">
        <Link
          href="/about"
          className="flex justify-center items-center mx-auto p-4 rounded-4xl
                font-bold text-white  bg-amber-400 dark:bg-green-500 dark:border-white 
                hover:opacity-80 hover:scale-125 transition-all  duration-300"
        >
          <span className="material-symbols-outlined mr-2">person</span>
          詳しくみてみる
        </Link>
      </div>
    </div>
  );
}

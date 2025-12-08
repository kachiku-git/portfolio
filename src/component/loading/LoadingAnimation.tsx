"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

// wrapper componentからonFinishを受け取る
type Props = {
  onFinish: () => void;
};

// タイプテキスト設定
const NAME_TEXT = "KEITAFUJIWARA";

export default function LoadingAnimation({ onFinish }: Props) {
  const animationRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLImageElement | null>(null);
  const nameRef = useRef<HTMLSpanElement | null>(null);
  const nameWrapperRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (!animationRef.current || !logoRef.current || !nameRef.current) return;

    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          // 最後にアニメーションごとフェードアウトさせる
          gsap.to(animationRef.current, {
            autoAlpha: 0,
            duration: 0.5,
            onComplete: onFinish,
          });
        },
      });

      // 初期状態：名前は空文字にしておく
      gsap.set(nameRef.current, { text: "" });

      // ① ロゴが中央にふわっと出る
      timeline.from(logoRef.current, {
        autoAlpha: 0,
        y: 20,
        duration: 0.5,
      });

      // ② ロゴが左にスライドしながら少し小さくなる
      timeline.to(logoRef.current, {
        x: -10, // 左にどれくらい動かすか
        scale: 0.85,
        duration: 0.5,
      });

      // ③ ロゴの右側に名前の箱をフェードイン
      if (nameWrapperRef.current) {
        timeline.from(
          nameWrapperRef.current,
          {
            autoAlpha: 0,
            x: 10,
            duration: 0.3,
          },
          "-=0.3" // ロゴ移動と少しだけかぶせる
        );
      }

      // ④ 名前をタイプするように出す（TextPlugin）
      timeline.to(
        nameRef.current,
        {
          text: NAME_TEXT,
          duration: 0.7,
          ease: "none", // タイプ感を出すなら等速のほうがそれっぽい
        },
        "-=0.1"
      );

      // ⑤ ロゴ＋名前セットを「ヘッダー方向」に吸い込む
      timeline.to([logoRef.current, nameWrapperRef.current], {
        y: -300, // 上にどれくらい動かすか（ヘッダー位置に合わせて調整）
        x: -300,
        scale: 0.5,
        autoAlpha: 0,
        duration: 0.5,
      });

      timeline.addLabel("end");
    }, animationRef);

    return () => context.revert();
  }, [onFinish]);

  return (
    <div
      ref={animationRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black text-white"
    >
      <div className="flex items-center">
        {/* ref使用時はImage使えない */}
        <img
          ref={logoRef}
          src="/img/logo.svg"
          alt="Keita Fujiwara Logo"
          className="w-50 h-50 md:w-150 md:h-150 object-contain"
        />

        {/* タイプテキスト表示） */}
        <div
          ref={nameWrapperRef}
          className="ml-4 text-2xl md:text-5xl tracking-[0.25em] uppercase"
        >
          <span ref={nameRef} />
        </div>
      </div>
    </div>
  );
}

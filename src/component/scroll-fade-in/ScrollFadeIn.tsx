"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ScrollTriggerを使う宣言
gsap.registerPlugin(ScrollTrigger);

type ScrollFadeInProps = {
  children: React.ReactNode;
  className?: string;
};

const ScrollFadeIn = ({ children, className }: ScrollFadeInProps) => {
  const targetDevRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const targetRef = targetDevRef.current;
    if (!targetDevRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targetRef,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power4.inOut",
          scrollTrigger: {
            trigger: targetRef,
            start: "top 95%", // 要素のtopが画面の80%位置に来たら発火
            toggleActions: "play none none none",
            // ↑ 画面入: play / 再入: none / 表示してから離れる　leave: none / もう一回するか？ back: reverse
          },
        }
      );
    }, targetRef);
    // アンマウント時に破棄
    return () => ctx.revert();
  }, []);

  return (
    <div ref={targetDevRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollFadeIn;

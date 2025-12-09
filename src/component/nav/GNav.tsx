"use client";
import gsap from "gsap";
import Link from "next/link";
import { useEffect } from "react";
import { useRef } from "react";

type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

type GNavProps = {
  items: NavItem[];
  className?: string;
};

// gsapを使ったナビゲーションアイテムコンポーネント
// mapで回す用
function GNavItem({ item }: { item: NavItem }) {
  const underLineRef = useRef<HTMLSpanElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!underLineRef.current) return;
    // アンダーラインのアニメーション設定初期値
    gsap.set(underLineRef.current, {
      scaleX: 0,
      transformOrigin: "left center",
    });
    // アンダーラインのアニメーション
    tweenRef.current = gsap.to(underLineRef.current, {
      scaleX: 1,
      duration: 0.3,
      ease: "power3.out",
      paused: true,
    });
  }, []);

  const handleEnter = () => {
    tweenRef.current?.play();
  };
  // マウスイベントハンドラ離れた時
  const handleLeave = () => {
    tweenRef.current?.reverse();
  };

  return (
    <li
      className="relative flex items-center gap-2 text-xl font-bold"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span className="material-symbols-outlined">{item.icon}</span>
      <Link href={item.href}>{item.label}</Link>
      <span
        ref={underLineRef}
        className="absolute left-0 -bottom-1 w-full h-0.5 bg-amber-400 dark:bg-green-500"
      />
    </li>
  );
}

export default function GNav({ items, className }: GNavProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <ul className="flex flex-col items-center gap-5">
        {items.map((item) => (
          <GNavItem key={item.href} item={item} />
        ))}
      </ul>
    </nav>
  );
}

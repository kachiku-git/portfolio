"use client";
import { useState } from "react";
import GNav from "@/component/nav/GNav";

type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

type HumMenuProps = {
  items: NavItem[];
  className?: string;
};

export default function HumMenu({ className, items }: HumMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ハンバーガーボタン */}
      <button
        type="button"
        aria-label="メニューを開閉"
        onClick={() => setOpen((prev) => !prev)}
        className={`
          fixed top-4 right-4 z-50
          flex items-center justify-between w-[120px] gap-5
          rounded-full border border-black dark:border-white
          bg-zinc-50/80 dark:bg-zinc-900/80
          px-8 py-4 backdrop-blur
          transition-all duration-800
          hover:scale-[1.03]
          ${className ?? ""}
        `}
      >
        {/* 3本線 */}
        <span className="relative flex h-4 w-5 items-center justify-center">
          <span
            className={`
              absolute h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-transform duration-500
              ${open ? "translate-y-0 rotate-225" : "-translate-y-1"}
            `}
          />
          <span
            className={`
              absolute h-0.5 w-4 bg-zinc-900 dark:bg-zinc-100 transition-transform duration-400
              ${open ? "opacity-0 rotate-360" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute h-0.5 w-5 bg-zinc-900 dark:bg-zinc-100 transition-transform duration-500
              ${open ? "translate-y-0 -rotate-225" : "translate-y-1"}
            `}
          />
        </span>

        <span className="text-sm font-semibold">{open ? "CLOSE" : "MENU"}</span>
      </button>

      {/* ボタンクリックで出現する枠 */}
      <div
        className={`
          flex fixed inset-0 z-40 items-center justify-end
          bg-black/60 backdrop-blur-sm
          transition-opacity duration-500 
          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          ${className ?? ""}
        `}
        onClick={() => setOpen(false)}
      >
        <div
          className={`
            relative h-full w-4/5 max-w-xs
            bg-zinc-50 dark:bg-zinc-900
            border border-black dark:border-white
            transition-transform duration-500
            ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* 表示したい内容を格納 */}
          <GNav items={items} className="w-full justify-center py-16" />
        </div>
      </div>
    </>
  );
}

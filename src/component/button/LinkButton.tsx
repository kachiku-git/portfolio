import Link from "next/link";
import React from "react";

type LinkButtonProps = {
  children: React.ReactNode;
  className?: string;
  url: string;
  onClick?: () => void;
};

export default function LinkButton({
  children,
  className,
  url,
  onClick,
}: LinkButtonProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener"
      className="w-2/3 sm:w-5/12  flex items-center justify-center"
    >
      <button
        className={`
                block mx-auto p-4 rounded-4xl
                font-bold text-white  bg-amber-400 dark:bg-green-500 dark:border-white 
                hover:opacity-80 hover:scale-125 transition-all  duration-300
                ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}

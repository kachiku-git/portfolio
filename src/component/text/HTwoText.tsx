import React, { ReactNode } from "react";

type HTwoText = {
  children: ReactNode;
  className?: string;
};

export default function HTwoText({ children, className }: HTwoText) {
  return (
    <div
      className={`text-2xl font-bold text-black dark:text-white ${className}`}
    >
      {children}
    </div>
  );
}

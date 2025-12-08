import React, { ReactNode } from "react";

type HThreeText = {
  children: ReactNode;
  className?: string;
};

export default function HThreeText({ children, className }: HThreeText) {
  return (
    <div
      className={`text-xl font-bold text-black dark:text-white ${className}`}
    >
      {children}
    </div>
  );
}

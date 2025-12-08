import React, { ReactNode } from "react";

type HOneText = {
  children: ReactNode;
  className?: string;
};

export default function HOneText({ children, className }: HOneText) {
  return (
    <h1
      className={`text-3xl font-bold text-black dark:text-white ${className}`}
    >
      {children}
    </h1>
  );
}

import React, { ReactNode } from "react";

type PTextProps = {
  children: ReactNode;
  className?: string;
};

export default function PText({ children, className }: PTextProps) {
  return (
    <p className={` text-black dark:text-white ${className}`}>{children}</p>
  );
}

import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function Button({ children, className, onClick }: ButtonProps) {
  return (
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
  );
}

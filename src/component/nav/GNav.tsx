import Link from "next/link";
import React from "react";

type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

type GNavProps = {
  items: NavItem[];
  className?: string;
};

export default function GNav({ items, className }: GNavProps) {
  return (
    <nav className={`flex items-center ${className}`}>
      <ul className="flex flex-col items-center gap-5">
        {items.map((item) => (
          <li
            key={item.href}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <span className={`material-symbols-outlined`}>{item.icon}</span>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

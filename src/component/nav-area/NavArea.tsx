import React from "react";
import GNav from "../nav/GNav";
import HumMenu from "../hum-menu/HumMenu";

type NavItem = {
  label: string;
  href: string;
  icon?: string;
};

type NavAreaProps = {
  items: NavItem[];
  className?: string;
};

export default function NavArea({ items, className }: NavAreaProps) {
  return (
    <>
      <GNav items={items} className={`hidden sm:flex ${className}`} />
      <HumMenu items={items} className={`sm:hidden  ${className}`} />
    </>
  );
}

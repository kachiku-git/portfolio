import React from "react";

type FooterProps = {
  className?: string;
};

export default function Footer({ className }: FooterProps) {
  return (
    <footer>
      <div className={`text-center ${className}`}>&copy;KEITA FUJIWARA</div>
    </footer>
  );
}

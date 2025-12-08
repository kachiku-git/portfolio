"use client";

import { useEffect, useState } from "react";
import LoadingAnimation from "./LoadingAnimation";

type Props = {
  children: React.ReactNode;
};

export default function LoadingWrapper({ children }: Props) {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    // セッションストレージを使って、一度訪れたかどうかを判定
    const visited = sessionStorage.getItem("visited");
    if (!visited) {
      setShowLoading(true);
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  return (
    <>
      {children}
      {showLoading && (
        <LoadingAnimation onFinish={() => setShowLoading(false)} />
      )}
    </>
  );
}

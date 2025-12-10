import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/header/Header";
import Footer from "@/component/footer/Footer";
import LoadingWrapper from "@/component/loading/LoadingWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 後でSEO対策を考慮して修正する
export const metadata: Metadata = {
  title: "K.Fujiwara Portfolio",
  description:
    "K.Fujiwaraのポートフォリオサイトです。主にフロントエンド開発を中心に活動しております。",
  icons: {
    icon: [{ url: "/img/logo.svg", type: "image/x-icon" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LoadingWrapper>
          <div className="min-h-screen sm:h-screen overflow-visible grid grid-cols-1 sm:grid-cols-[1fr_4fr]">
            <aside className="sm:p-4 sm:h-screen sm:sticky sm:top-0">
              <Header className="p-2 sm:p-0 sm:min-h-2/3 sm:border-y-3 dark:border-whiter-3 rounded-4xl" />
            </aside>
            <div className="scroll-container flex flex-col sm:h-screen sm:overflow-y-auto">
              <main className="flex-1">{children}</main>
              <Footer className="my-8 sm:mt-16 " />
            </div>
          </div>
        </LoadingWrapper>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { TopNav } from "./_components/topnav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlotCorn 📚🍿",
  description: "Created by gmartinsnull",
};

export default function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`sans-serif ${inter.className}`}>
        <div className="grid grid-rows-[auto_1fr]">
          <TopNav />
          {children}
          {modal}
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}

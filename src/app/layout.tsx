import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { TopNav } from "./_components/topnav";
import { AppContextProvider } from "./context/CategoryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlotCorn 📚🍿",
  description: "Created by gmartinsnull",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`sans-serif ${inter.className}`}>
        <div className="grid h-screen grid-rows-[auto_1fr]">
          <AppContextProvider>
            <TopNav />
            <main className="overflow-y-scroll">{children}</main>
          </AppContextProvider>
        </div>
      </body>
    </html>
  );
}

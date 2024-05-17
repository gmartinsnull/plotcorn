import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { TopNav } from "./_components/topnav";
import { Genre } from "genre-pkg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PlotCorn 📚🍿",
  description: "Created by gmartinsnull",
};

export default async function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  const subjects = await fetch(`${process.env.BASE_URL}/api/subject`).then(
    (res) => res.json(),
  );

  const genres = await fetch(`${process.env.BASE_URL}/api/genre`)
    .then((res) => res.json())
    .then((data) => {
      return data.map((genre: Genre) => {
        return { value: genre.id.toString(), label: genre.name };
      });
    });

  return (
    <html lang="en">
      <body className={`sans-serif ${inter.className}`}>
        <div className="grid grid-rows-[auto_1fr]">
          <TopNav subjects={subjects} genres={genres} />
          {children}
          {modal}
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}

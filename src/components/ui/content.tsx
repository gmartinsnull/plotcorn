"use client";

import { useAppContext } from "@/app/context/CategoryContext";
import { Book } from "@/types/book";
import { useEffect, useState } from "react";
import Image from "next/image";

function Spinner() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <svg
        width="48"
        height="48"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fill="white"
      >
        <path
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
        />
        <path
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
          className="spinner_ajPY"
        />
      </svg>
    </div>
  );
}

export function Content() {
  const { catValue } = useAppContext();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (catValue) {
      setLoading(true);
      fetch(`/api/subject/${catValue}`, { cache: "no-store" })
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
          setLoading(false);
        });
    }
  }, [catValue]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 rounded p-4">
      {books.map((book: Book, index: number) => (
        <div
          key={index}
          className="flex h-96 w-48 flex-col justify-between rounded bg-neutral-800"
        >
          <Image
            className="h-4/5 w-full rounded"
            src={book.coverUrl}
            style={{ objectFit: "contain" }}
            alt={book.title}
            width={200}
            height={300}
          />
          <div className="h-1/5 content-end p-2 text-white">
            <p>{book.title}</p>
            <p>{book.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

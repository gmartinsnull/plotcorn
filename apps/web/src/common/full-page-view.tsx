"use client";

import { Rating } from "@/components/rating";
import { Book } from "subjects-pkg";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function FullPageView(props: { bookId: string }) {
  const params = useSearchParams();

  const book: Book = {
    id: props.bookId,
    title: params.get("title") || "",
    coverUrl: params.get("coverUrl") || "",
    author: params.get("author") || "",
    rating: Number(params.get("rating")) || 0,
    year: Number(params.get("year")) || 0,
    pages: Number(params.get("pages")) || 0,
  };

  return (
    <div className="flex h-[calc(100vh-74px)] w-full min-w-0 items-center justify-center text-white">
      <div className="flex flex-shrink flex-grow items-center justify-center">
        <Image
          src={book.coverUrl}
          alt={book.title}
          style={{ objectFit: "contain" }}
          width={300}
          height={400}
        />
      </div>
      <div className="flex h-full w-2/6 flex-shrink-0 flex-col border-l">
        <div className="border-b px-2 py-5 text-center text-3xl font-bold">
          {book.title}
        </div>
        <div className="p-2">
          <div>Author:</div>
          <div>{book.author}</div>
        </div>
        <div className="p-2">
          <div>Year:</div>
          <div>{book.year}</div>
        </div>
        <div className="p-2">
          <div>Pages:</div>
          <div>{book.pages}</div>
        </div>
        <div className="p-2">
          <div>Rating:</div>
          <Rating rating={book.rating} />
        </div>
      </div>
    </div>
  );
}

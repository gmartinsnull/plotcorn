import { Book } from "@/types/book";
import Image from "next/image";
import { Rating } from "@/components/rating";
import Link from "next/link";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const books: Book[] = await fetch(`${process.env.URL}/api/subject/${id}`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="flex flex-wrap justify-center gap-4 rounded p-4">
      {books.map((book: Book, index: number) => (
        <div
          key={index}
          className="flex h-96 w-48 flex-col justify-between rounded bg-neutral-800"
        >
          <Link
            href={`/item/${book.id}?title=${book.title}&author=${book.author}&year=${book.year}&pages=${book.pages}&rating=${book.rating}&coverUrl=${book.coverUrl}`}
          >
            <Image
              className="h-4/5 w-full rounded-t"
              src={book.coverUrl}
              style={{ objectFit: "cover" }}
              alt={book.title}
              width={200}
              height={300}
            />
          </Link>
          <div className="h-1/5 content-end px-1 text-white">
            <p>{book.title}</p>
            <Rating rating={book.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}

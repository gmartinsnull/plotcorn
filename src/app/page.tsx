import { Book } from "@/types/book";
import Image from "next/image";

async function Books() {
  const book = await fetch(`${process.env.URL}/api/subject/dragons`, {
    cache: "no-store",
  }).then((res) => res.json());

  return (
    <div className="flex flex-wrap justify-center gap-4 rounded p-4">
      {book.map((book: Book, index: number) => (
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
          <div className="h-1/5 p-2 content-end">
            <p>{book.title}</p>
            <p>{book.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default async function Page() {
  return (
    <main>
      <Books />
    </main>
  );
}

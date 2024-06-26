import { Book } from "subjects-pkg";
import CardView from "@/app/_components/cardview";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const books: Book[] = await fetch(
    `${process.env.BASE_URL}/api/subject/${id}`,
    {
      cache: "no-store",
    },
  ).then((res) => res.json());

  return (
    <div className="flex flex-wrap justify-center gap-4 rounded p-4">
      {books.map((book: Book, index: number) => (
        <CardView key={index} item={book} type="book" />
      ))}
    </div>
  );
}

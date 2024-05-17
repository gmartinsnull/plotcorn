import CardView from "@/app/_components/cardview";
import { Movie } from "movies-pkg";

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const books: Movie[] = await fetch(
    `${process.env.BASE_URL}/api/genre/${id}`,
    {
      cache: "no-store",
    },
  ).then((res) => res.json());

  return (
    <div className="flex flex-wrap justify-center gap-4 rounded p-4">
      {books.map((movie: Movie, index: number) => (
        <CardView key={index} item={movie} type="movie" />
      ))}
    </div>
  );
}

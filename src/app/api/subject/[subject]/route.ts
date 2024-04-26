import { Book } from "@/types/book";
import { Doc } from "@/types/doc";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { subject: string };
  }
) {
  const subject = params.subject;
  const res = await fetch(
    `https://openlibrary.org/search.json?subject=${subject}&sort=rating`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const items: Doc[] = await res.json().then((json) => json.docs);

  const books: Book[] = items.map((item) => ({
    id: item.key,
    title: item.title,
    coverUrl: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`,
    author: item.author_name,
    rating: item.ratings_sortable,
    year: item.first_publish_year,
    pages: item.number_of_pages_median,
  }));

  return Response.json(books);
}

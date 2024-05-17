import { Book } from "subjects-pkg";
import { Doc } from "@/types/doc";

export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: { id: string };
  },
) {
  try {
    const subject = params.id;
    const res = await fetch(
      `https://openlibrary.org/search.json?subject=${subject}&sort=rating&limit=5`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const items: Doc[] = await res.json().then((json) => json.docs);

    const books: Book[] = items.map((item) => ({
      id: item.key.substring(item.key.lastIndexOf("/") + 1),
      title: item.title,
      coverUrl: `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`,
      author: item.author_name,
      rating: item.ratings_sortable,
      year: item.first_publish_year,
      pages: item.number_of_pages_median,
    }));

    return Response.json(books);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}

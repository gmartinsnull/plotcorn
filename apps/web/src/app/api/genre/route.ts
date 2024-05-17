import { Genre } from "genre-pkg";
export const dynamic = "force-dynamic"; // defaults to auto
export async function GET() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const items: Genre[] = await res.json().then((json) => {
      return json.genres;
    });

    return Response.json(items);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}

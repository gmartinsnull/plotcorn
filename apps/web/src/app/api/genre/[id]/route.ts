import { Movie } from "movies-pkg/Movie";
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
    const genre = params.id;
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}&with_genres=${genre}&language=en-US&include_adult=false&incude_video=false&sort_by=popularity.desc&page=1`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    const items: Movie[] = await res.json().then((json) => json.results);

    const parsed = items
      .slice(0, 5)
      .sort((a, b) => Number(b.vote_average) - Number(a.vote_average))
      .map((item) => ({
        id: item.id,
        title: item.title,
        coverUrl: `https://image.tmdb.org/t/p/w500/${item.poster_path}.jpg`,
        rating: item.vote_average,
        year: item.release_date.split("-")[0],
        overview: item.overview,
      }));

    return Response.json(parsed);
  } catch (error) {
    console.log(error);
    return Response.error();
  }
}

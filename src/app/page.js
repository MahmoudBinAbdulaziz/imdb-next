import React from "react";
import Results from "./components/results";
const API_KEY = process.env.API_KEY;

export default async function Page({ searchParams }) {
  const searchParam = await searchParams;
  const genre = searchParam.genre || "fetchTrending";

  const resp = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!resp.ok) throw new Error("Failed to fetch data");
  const data = await resp.json();
  return <Results results={data.results} />;
}

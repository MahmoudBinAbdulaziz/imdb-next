import React from "react";
import Results from "./components/results";
const API_KEY = process.env.API_KEY;

async function page({ searchParams }) {
  const searchParams2 = await searchParams;
  const genre = searchParams2.genre || "fetchTrending";

  const resp = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await resp.json();
  if (!resp.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return <Results results={results} />;
}

export default page;

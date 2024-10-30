"use client";

import React, { useEffect, useState } from "react";
import Results from "./components/results";
import { useSearchParams } from "next/navigation";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Page() {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams(); // Use this hook to access searchParams

  useEffect(() => {
    const genre = searchParams.get("genre") || "fetchTrending"; // Unwrap genre safely

    const fetchData = async () => {
      try {
        const resp = await fetch(
          `https://api.themoviedb.org/3${
            genre === "fetchTopRated"
              ? `/movie/top_rated`
              : `/trending/all/week`
          }?api_key=${API_KEY}&language=en-US&page=1`
        );
        if (!resp.ok) throw new Error("Failed to fetch data");

        const data = await resp.json();
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error.message);
        setError("Error loading data");
      }
    };

    fetchData();
  }, [searchParams]); // Depend on searchParams, so it re-fetches if genre changes

  if (error) {
    return <div>{error}</div>;
  }

  return <Results results={results} />;
}

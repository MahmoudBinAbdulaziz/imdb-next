"use client"; // Marks this as a Client Component

import React, { useEffect, useState } from "react";
import Results from "./components/results";
import { useSearchParams } from "next/navigation";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // NEXT_PUBLIC prefix required for client-side access

export default function Page() {
  const [results, setResults] = useState([]);

  const searchParams = useSearchParams(); // Client-side hook for searchParams

  useEffect(() => {
    const genre = searchParams.get("genre") || "fetchTrending"; // Safely access genre with .get()

    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3${
            genre === "fetchTopRated"
              ? `/movie/top_rated`
              : `/trending/all/week`
          }?api_key=${API_KEY}&language=en-US&page=1`
        );
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [searchParams]); // Depend on searchParams so it refetches if genre changes

  return <Results results={results} />;
}

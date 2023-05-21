import { useEffect } from "react";

function MovieFetcher({ apiKey, onMoviesFetched }) {
  useEffect(() => {
    FetchScienceFiction();
  });

  async function FetchScienceFiction() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=878`
      );
      if (response.ok) {
        const data = await response.json();
        const movies = data.results.slice(11, 20);
        onMoviesFetched(movies);
      } else {
        throw new Error("Error: " + response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return null;
}

export default MovieFetcher;

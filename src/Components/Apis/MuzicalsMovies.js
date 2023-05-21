import { useEffect } from "react";

function MovieFetcher({ apiKey, onMoviesFetched }) {
  useEffect(() => {
    fetchMuziceMovies();
  });

  async function fetchMuziceMovies() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=10402`
      );
      if (response.ok) {
        const data = await response.json();
        const movies = data.results.slice(0, 9);
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

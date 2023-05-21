import { useEffect } from "react";

function MovieFetcher({ apiKey, onMoviesFetched }) {
  useEffect(() => {
    Horror();
  });

  async function Horror() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=27`
      );
      if (response.ok) {
        const data = await response.json();
        const movies = data.results.slice(2, 11);
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

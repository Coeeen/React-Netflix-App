import { useEffect } from "react";

function MovieFetcher({ apiKey, onMoviesFetched }) {
  useEffect(() => {
    fetchPopularMovies();
  });

  async function fetchPopularMovies() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`
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

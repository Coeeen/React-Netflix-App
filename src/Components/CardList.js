import React, { useState } from "react";
import styled from "styled-components";
import PopularMovieFetcher from "./Apis/PopularMovie";
import ComedyMoviesFetcher from "./Apis/ComedyMovies";
import RomanceMoviesFetcher from "./Apis/RomanceMovies";
import HorrorFetcher from "./Apis/HorrorMovies";
import ScienceFictioFetcher from "./Apis/ScienceFiction";
import MuziceMoviesFetcher from "./Apis/MuzicalsMovies";
import CardMovie from "./CardMovie";

function CardList() {
  const apiKey = "9f68a0f026d358b275a7266ef098518a";
  const [Movies, SetMovies] = useState([]);
  const [ComedyMovies, SetComedyMovies] = useState([]);
  const [RomanceMovies, SetRomanceMovies] = useState([]);
  const [HorrorMovies, SetHorrorMovies] = useState([]);
  const [ScienceFiction, setScienceFiction] = useState([]);
  const [MuzicalsMovies, setMuzicalsMovies] = useState([]);

  function handleMoviesFetched(movies) {
    SetMovies(movies);
  }
  function handleMoviesComedyFetched(movies) {
    SetComedyMovies(movies);
  }
  function handleMoviesRomanceFetched(movies) {
    SetRomanceMovies(movies);
  }
  function handleSeriesFetched(movies) {
    SetHorrorMovies(movies);
  }
  function handleScienceFictionFetched(movies) {
    setScienceFiction(movies);
  }
  function handleMuzicalsFetched(movies) {
    setMuzicalsMovies(movies);
  }
  return (
    <div>
      <PopularMovieFetcher
        apiKey={apiKey}
        onMoviesFetched={handleMoviesFetched}
      />
      <ComedyMoviesFetcher
        apiKey={apiKey}
        onMoviesFetched={handleMoviesComedyFetched}
      />
      <RomanceMoviesFetcher
        apiKey={apiKey}
        onMoviesFetched={handleMoviesRomanceFetched}
      />
      <HorrorFetcher apiKey={apiKey} onMoviesFetched={handleSeriesFetched} />
      <ScienceFictioFetcher
        apiKey={apiKey}
        onMoviesFetched={handleScienceFictionFetched}
      />
      <MuziceMoviesFetcher
        apiKey={apiKey}
        onMoviesFetched={handleMuzicalsFetched}
      />

      <Title>Popular Movies</Title>
      <Movie>
        {Movies.map((movie) => (
          <CardMovie
            Title={movie.original_title}
            key={movie.id}
            Img={movie.poster_path}
          />
        ))}
      </Movie>
      <TitleGenre>Comedy</TitleGenre>
      <Movie>
        {ComedyMovies.map((movie) => (
          <CardMovie
            Title={movie.original_title}
            key={movie.id}
            Img={movie.poster_path}
          />
        ))}
      </Movie>
      <TitleGenre>Romance</TitleGenre>
      <Movie>
        {RomanceMovies.map((movie) => (
          <CardMovie
            Title={movie.original_title}
            key={movie.id}
            Img={movie.poster_path}
          />
        ))}
      </Movie>
      <TitleGenre>Muzicals</TitleGenre>
      <Movie>
        {MuzicalsMovies.map((movie) => (
          <CardMovie
            Title={movie.original_title}
            key={movie.id}
            Img={movie.poster_path}
          />
        ))}
      </Movie>
      <TitleGenre>Horror</TitleGenre>
      <Movie>
        {HorrorMovies.map((movie) => (
          <CardMovie
            Title={movie.original_title}
            key={movie.id}
            Img={movie.poster_path}
          />
        ))}
      </Movie>
      <TitleGenre>Science Fiction</TitleGenre>
      <Movie>
        {ScienceFiction.map((movie) => (
          <CardMovie
            Title={movie.original_title}
            key={movie.id}
            Img={movie.poster_path}
          />
        ))}
      </Movie>

      <BlureMovie>
        {RomanceMovies.map((movie) => (
          <CardMovie
            Title={movie.original_title}
            key={movie.id}
            Img={movie.poster_path}
          />
        ))}
      </BlureMovie>
    </div>
  );
}

const Title = styled.h2`
  margin: 70px 0px 0px 55px;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  color: white;
`;

const Movie = styled.div`
  min-height: 40vh;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-left: 55px;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TitleGenre = styled.h2`
  margin: 30px 0px 0px 55px;
  font-size: 1.5rem;
  font-family: "Open Sans", sans-serif;
  color: white;
  word-break: break-all;
`;

const BlureMovie = styled.div`
  min-height: 40vh;
  display: flex;
  flex-wrap: wrap;
  filter: blur(8px);
  opacity: 0.8;
  gap: 10px;
  margin-left: 55px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export default CardList;

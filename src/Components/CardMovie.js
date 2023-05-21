import React from "react";
import styled from "styled-components";
function CardMovie({ Title, Img }) {
  return (
    <div>
      <MovieListDiv>
        <MovieImage src={`https://image.tmdb.org/t/p/w342${Img}`} alt={Title} />
        <TitleMovie>{Title}</TitleMovie>
      </MovieListDiv>
    </div>
  );
}

const TitleMovie = styled.p`
  font-size: 0.9rem;
  font-weight: bolder;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  color: white;
  max-width: 200px;
`;

const MovieListDiv = styled.div`
  margin-top: 30px;
`;

const MovieImage = styled.img`
  object-fit: contain;
  max-height: 30vh;
  max-width: 60vw;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
export default CardMovie;

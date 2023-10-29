import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { useParams, Link } from "react-router-dom";
import { BsFillPlayFill } from "react-icons/bs";
function MovieDetail() {
  const [MovieData, setMovieData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetchSpecificMovie();
  }, [id]);

  async function fetchSpecificMovie() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=9f68a0f026d358b275a7266ef098518a`
      );
      if (response.ok) {
        const data = await response.json();
        setMovieData(data);
        console.log(MovieData);
      } else {
        throw new Error("Error: " + response.status);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  }

  return (
    <>
      <Navbar />
      {MovieData && (
        <FlexContainer>
          <ImageContainer>
            <BackgroundImage
              src={`https://image.tmdb.org/t/p/w342${MovieData.poster_path}`}
              alt={MovieData.original_title}
            />
          </ImageContainer>
          <DataContainer>
            <h1>{MovieData.title}</h1>
            <SpecificData>
              <span>Release: {MovieData.release_date}</span>| {"  "}
              <span>{MovieData.runtime}min</span> |{" "}
              <span>{MovieData.adult ? "18+" : "16+"}</span>
            </SpecificData>
            <p>{MovieData.overview} </p>
            <Link to={"/LogIn"}>
              <button>
                {/* <span>
                  <BsFillPlayFill />
                </span> */}
                PLAY
              </button>
            </Link>
          </DataContainer>
        </FlexContainer>
      )}
    </>
  );
}

export default MovieDetail;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 93vh;
`;

const FlexContainer = styled.div`
  display: flex;
  color: white;
  font-family: "Open Sans", sans-serif;
  background-color: #181818;
`;

const BackgroundImage = styled.img`
  width: 450px;
  height: auto;
  border-radius: 20px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 30px 9px rgba(0, 0, 0, 0.6);
  @media (max-width: 768px) {
    width: 250px;
  }
  @media (max-width: 768px) {
    width: 350px;
  }
`;
const DataContainer = styled.div`
  flex: 2;
  margin-top: 5%;
  h1 {
    font-size: 5em;
    max-width: 70%;
    font-weight: bolder;
    margin-bottom: 5px;
  }
  span {
    font-weight: lighter;
  }
  p {
    margin-top: 3%;
    max-width: 50%;
    font-size: 1.5rem;
    font-weight: lighter;
    font-style: italic;
  }
  button {
    font-size: 1.3rem;
    width: 15rem;
    padding: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: #f5d400;
    font-family: "Open Sans", sans-serif;
    &:hover {
      scale: calc(1.1);
    }
  }
  @media (max-width: 768px) {
    margin-top: 30%;
    h1 {
      font-size: 3em;
      max-width: 100%;
    }
    p {
      max-width: 100%;
      font-size: 1.5rem;
    }
  }
  @media (max-width: 1024px) {
    margin-top: 30%;
    h1 {
      font-size: 3em;
      max-width: 100%;
    }
    p {
      max-width: 100%;
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 30%;
    h1 {
      font-size: 3em;
      max-width: 100%;
    }
    p {
      max-width: 100%;
      font-size: 1.5rem;
    }
  }
`;
const SpecificData = styled.div`
  display: flex;
`;

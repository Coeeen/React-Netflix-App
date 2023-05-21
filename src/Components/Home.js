import React from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
import { motion } from "framer-motion";
import CardList from "./CardList";
import Footer from "./Footer";

const MoviesMontion = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 1 },
  },
};
const SubTestMotion = {
  hidden: { x: 150, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", staggerChildren: 0.25 },
  },
};

function Home() {
  return (
    <BakcgorundStyle>
      <Navbar />
      <TitleStyle>
        <motion.h1 variants={MoviesMontion} initial="hidden" animate="show">
          Movies
        </motion.h1>
        <motion.p variants={SubTestMotion} initial="hidden" animate="show">
          Whether they are scary, funny, dramatic, romantic, or any other <br />
          genre - evoke emotions in us that we won't experience anywhere else.
          <br />
          There is plenty to choose from!
        </motion.p>
      </TitleStyle>
      <CardList />
      <Footer />
    </BakcgorundStyle>
  );
}

export default Home;

const TitleStyle = styled(motion.div)`
  h1 {
    margin: 70px 0px 5px 55px;
    font-size: 3rem;
    font-family: "Bebas Neue", sans-serif;
    letter-spacing: 4px;
    color: white;
  }
  p {
    margin: 0px 0px 20px 55px;
    font-size: 1.4rem;
    font-family: "Open Sans", sans-serif;
    color: white;
  }
`;
const BakcgorundStyle = styled.div`
  background-color: #181818;
`;

import React from "react";
import styled from "styled-components";
import { AnimatedContainer } from "./IsInView";
import { motion } from "framer-motion";
import WatchEverywhere from "../img/WatchEverwhere.png";

function WatchEveryWhere() {
  const [TextElement, ControlLElement] = AnimatedContainer();
  const ImageMotion = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <WatchOnTv>
      <ImageContainer
        variants={ImageMotion}
        initial="hidden"
        animate={ControlLElement}
        ref={TextElement}
      >
        <ImageOnTv src={WatchEverywhere} alt="NetflixEveryWhere" loading="lazy" />
      </ImageContainer>
      <TextContainer>
        <TvHeader>Watch Everywhere</TvHeader>
        <TvText>
          Watch movies, series, and shows without limits on your phone, tablet,
          laptop, and TV.
        </TvText>
      </TextContainer>
    </WatchOnTv>
  );
}

export default WatchEveryWhere;

const WatchOnTv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10% 0% 5% 0%;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  height: 500px;
  text-align: center;
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  text-align: center;
  padding: 0 5%;

  @media (max-width: 768px) {
    padding: 0;
    margin-bottom: 5%;
  }
`;

const ImageOnTv = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 2em;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
const TvHeader = styled.h1`
  margin: 10% 0px 5% 0%;
  font-size: 7rem;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 2px;
  line-height: 0.9;
  color: white;
  text-align: center;
  word-wrap: break-word;
  /* background: -webkit-linear-gradient(#e50914, #f5f5f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

  @media (max-width: 1208px) {
    font-size: 5rem;
  }
`;
const TvText = styled.p`
  font-size: 2.5rem;
  font-family: "Bebas Neue", sans-serif;
  max-width: 600px;
  margin: 0 auto;
  color: white;
  text-align: center;
  letter-spacing: 1.2px;
  line-height: 1.1em;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

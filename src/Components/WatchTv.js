import React from "react";
import NetflixOnTv from "../img/NetflixOnTv.png";
import styled from "styled-components";
import { AnimatedContainer } from "./IsInView";
import { motion } from "framer-motion";

function WatchTv() {
  const [TextElement, ControlLElement] = AnimatedContainer();

  const TextMotion = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    },
  };

  return (
    <WatchOnTv>
      <TextContainer
        variants={TextMotion}
        initial="hidden"
        animate={ControlLElement}
        ref={TextElement}
      >
        <TvHeader>Watch on TV</TvHeader>
        <TvText>
          Watch on Smart TVs, PlayStation and Xbox consoles, Chromecast devices,
          Apple TV, Blu-ray players, and more.
        </TvText>
      </TextContainer>
      <ImageContainer>
        <ImageOnTv src={NetflixOnTv} alt="NetflixOnTv" loading="lazy" />
      </ImageContainer>
    </WatchOnTv>
  );
}

export default WatchTv;

const WatchOnTv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10% 0% 10% 0%;
  padding: 0 5%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 5% 0;
  }
`;

const TextContainer = styled(motion.div)`
  flex: 1;
  height: 500px;
  text-align: center;
  @media (max-width: 768px) {
    height: auto;
  }
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
    padding: 0;
    margin-bottom: 5%;
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

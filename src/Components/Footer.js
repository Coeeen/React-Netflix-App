import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

function Footer() {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });

  const SignInAnimation = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1 },
    transition: { ease: "easeOut", duration: 1 },
  };

  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, view]);

  return (
    <div>
      <motion.div
        ref={element}
        variants={SignInAnimation}
        initial="hidden"
        animate={controls}
      >
        <FooterStyleHeading>Even more to watch!</FooterStyleHeading>
        <FooterTextStyle>
          Netflix offers access to a vast library of movies and documentaries,
          TV shows, anime, award-winning Netflix Originals, and more. Watch as
          much as you want, whenever you want.
        </FooterTextStyle>
        <FooterStyle>
          <Link to="JoinNow">
            <ButtonStyle>JOIN NOW</ButtonStyle>
          </Link>
        </FooterStyle>
      </motion.div>
      <Description>
        This is not a commercial website, but a project created by me for my
        portfolio.
      </Description>
    </div>
  );
}

export default Footer;

const FooterStyleHeading = styled.h1`
  margin: 140px 0px 5px 5px;
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 4px;
  color: white;
  text-align: center;
`;

const FooterTextStyle = styled.p`
  font-size: 1.2rem;
  font-family: "Open Sans", sans-serif;
  color: white;
  text-align: center;
  width: 700px;
  margin: 0 auto;
  @media (max-width: 768px) {
    font-size: 0.8em;
    max-width: 350px;
  }
`;

const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonStyle = styled.button`
  padding: 15px;
  width: 250px;
  color: white;
  background-color: #f40612;
  border: none;
  border-radius: 0.2em;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 1.3em;
  text-align: center;
  margin: 20px 0px 100px 0px;

  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 3px 8px 44px 16px rgba(255, 0, 0, 1);
    -moz-box-shadow: 3px 8px 44px 16px rgba(255, 0, 0, 1);
    box-shadow: 3px 8px 44px 16px rgba(255, 0, 0, 0.5);
  }
`;
const Description = styled.p`
  margin: 40px 0px 5px 5px;
  font-family: "Open Sans", sans-serif;
  color: grey;
  opacity: 0.4;
  font-size: 0.8em;
`;

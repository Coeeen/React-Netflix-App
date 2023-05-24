import React from "react";
import NetflixIcon from "../img/Netflix.png";
import SignInBackground from "../img/SignInBackground.jpg";
import "../Join.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WatchTv from "./WatchTv";
import KidsContent from "./KidsContent";
import WatchEveryWhere from "./WatchEveryWhere";

function JoinNow() {
  const HomeMotion = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const ShowMotion = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { delay: 3, duration: 0.5 },
    },
  };
  const SubTextMotion = {
    hidden: { opacity: 0, x: 200 },
    show: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <BodyWrapper>
      <NavBar>
        <Link to="/">
          <LogoImage src={NetflixIcon} alt="Logo" />
        </Link>
        <Link to="/login">
          <ButtonLogIn>LOG IN</ButtonLogIn>
        </Link>
      </NavBar>
      <LogInPanel variants={HomeMotion} initial="hidden" animate="show">
        <Header variants={HomeMotion}>
          Movies, series and much more without limits!
        </Header>
        <SubText variants={HomeMotion}>
          Watch everywhere. Cancel anytime
        </SubText>
        <RenewText variants={SubTextMotion}>
          Let's start watching. Enter your email address to create or renew your
          account
        </RenewText>
        <FormContainer variants={ShowMotion} initial="hidden" animate="show">
          <EmailInput type="text" placeholder="Adres E-mail"></EmailInput>
          <EmailSubmit>Start's now</EmailSubmit>
        </FormContainer>
      </LogInPanel>
      <WatchTv />
      <WhiteLine />
      <WatchEveryWhere />
      <WhiteLine />
      <KidsContent />
      <Description>
        This is not a commercial website, but a project created by me for my
        portfolio.
      </Description>
    </BodyWrapper>
  );
}

export default JoinNow;

const NavBar = styled.div`
  display: flex;
`;

const LogoImage = styled(motion.img)`
  width: 10%;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 1308px) {
    width: 20%;
  }
`;
const ButtonLogIn = styled.button`
  padding: 4px;
  color: white;
  background-color: #f40612;
  border: none;
  border-radius: 0.2em;
  cursor: pointer;
  font-size: 1em;
  text-align: center;
  width: 100px;
  margin: 35px 25px 0px 0px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100px;
    margin-bottom: 10px;
  }
  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 30px 11px rgba(255, 0, 0, 0.3);
    -moz-box-shadow: 0px 0px 30px 11px rgba(255, 0, 0, 0.3);
    box-shadow: 0px 0px 30px 11px rgba(255, 68, 0, 0.3);
    /* color: #f40612;
    background-color: white; */
  }
`;

const LogInPanel = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to right,
      rgba(0, 212, 255, 0.2),
      rgba(255, 0, 151, 0.4)
    ),
    url(${SignInBackground});
  height: 85vh;
  width: 90vw;
  max-width: 1600px;
  border-radius: 2em;
  margin: 0 auto;

  @media (max-width: 768px) {
    scale: 90%;
  }
`;

const Header = styled(motion.h1)`
  margin: 10% 0px 0px 0%;
  font-size: 6rem;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 4px;
  line-height: 0.9;
  color: white;
  max-width: 60%;
  text-align: center;
  word-wrap: break-word;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 3rem;
  }
  @media (max-width: 1208px) {
    font-size: 4rem;
    margin: 10% 0px 5px 5%;
  }
`;
const SubText = styled(motion.h2)`
  margin: 1% 0% 0% 9%;
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  line-height: 0.9;
  color: white;
  letter-spacing: 4px;

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 2rem;
  }
  @media (max-width: 1208px) {
    font-size: 1.5rem;
  }
`;
const RenewText = styled(motion.p)`
  margin: 1% 5% 0% 10%;
  font-size: 1.5rem;
  font-family: "Bebas Neue", sans-serif;
  line-height: 0.9;
  color: white;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1rem;
  }
  @media (max-width: 1208px) {
    font-size: 0.9rem;
  }
`;

const FormContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-top: 1%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const EmailInput = styled.input`
  font-family: "Bebas Neue", sans-serif;
  width: 20%;
  border-color: rgba(255, 255, 255, 0, 6);
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 20px;
  margin: 0% 1% 0% 10%;
  color: white;
  @media (max-width: 768px) {
    width: 60%;
    margin-bottom: 10px;
  }
`;
const EmailSubmit = styled.button`
  padding: 20px;
  color: white;
  background-color: #f40612;
  border: none;
  border-radius: 0.2em;
  cursor: pointer;
  font-size: 1.3em;
  width: 50%;
  max-width: 250px;
  font-family: "Bebas Neue", sans-serif;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;

const BodyWrapper = styled.div`
  background-color: #00081d;
`;

const WhiteLine = styled.div`
  width: 80%;
  padding: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 auto;
`;
const Description = styled.p`
  margin: 10% 0px 5px 5px;
  font-family: "Open Sans", sans-serif;
  color: grey;
  opacity: 0.4;
  font-size: 0.8em;
`;

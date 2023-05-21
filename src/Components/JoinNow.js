import React from "react";
import NetflixIcon from "../img/Netflix.png";
import SignInBackground from "../img/SignInBackground.jpg";
import "../Join.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function JoinNow() {
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
      <LogInPanel>
        <Header>Movies, series and much more without limits!</Header>
        <SubText>Watch everywhere. Cancel anytime</SubText>
        <RenewText>
          Let's start watching. Enter your email address to create or renew your
          account
        </RenewText>
        <FormContainer>
          <EmailInput type="text" placeholder="Adres E-mail"></EmailInput>
          <EmailSubmit>Start's now</EmailSubmit>
        </FormContainer>
      </LogInPanel>
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
  width: 125px;
  margin: 25px 25px 0px 0px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  @media (max-width: 768px) {
    width: 100px;
    margin-bottom: 10px;
  }
  &:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 30px 11px rgba(255, 0, 0, 0.4);
    -moz-box-shadow: 0px 0px 30px 11px rgba(255, 0, 0, 0.4);
    box-shadow: 0px 0px 30px 11px rgba(255, 68, 0, 0.8);
    /* color: #f40612;
    background-color: white; */
  }
`;

const LogInPanel = styled.div`
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
      to right,
      rgba(0, 212, 255, 0.1),
      rgba(255, 0, 151, 0.3)
    ),
    url(${SignInBackground});
  height: 85vh;
  width: 90vw;
  max-width: 1600px;
  border-radius: 2em;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 10%;
  }
`;

const Header = styled.h1`
  margin: 10% 0px 5px 0%;
  font-size: 6rem;
  font-family: "Bebas Neue", sans-serif;
  letter-spacing: 2px;
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
const SubText = styled.h2`
  margin: 1% 5% 0% 7%;
  font-size: 3rem;
  font-family: "Bebas Neue", sans-serif;
  line-height: 0.9;
  color: white;
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 2rem;
  }
  @media (max-width: 1208px) {
    font-size: 1.5rem;
  }
`;
const RenewText = styled.p`
  margin: 1.5% 5% 0% 6%;
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

const FormContainer = styled.div`
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
  border-color: green;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  padding: 20px;
  margin: 0% 1% 0% 6%;
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
  width: 100%;
  max-width: 400px;
  font-family: "Bebas Neue", sans-serif;

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
const BodyWrapper = styled.div`
  background-color: #00081d;
`;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import NetflixBackground from "../img/BackgroundLoginNetflix.jpg";
import NetflixLogo from "../img/Netflix.png";
import { Link } from "react-router-dom";

function LogIn() {
  const LogoPopUp = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <BackgroundWrapper>
      <Link to="/">
        <LogoImage
          src={NetflixLogo}
          alt="logo"
          variants={LogoPopUp}
          initial="hidden"
          animate="show"
        />
      </Link>
      <LogInPanel>
        <LoginForm>
          <Heading>Login</Heading>
          <Input type="text" placeholder="E-mail or phone number" />
          <Input type="password" placeholder="Password" />
          <ButtonLogIn>Log in</ButtonLogIn>
          <CheckBox>
            <input type="checkbox" />
            <span>Remember me</span>
          </CheckBox>
          <SignInText>Do you not have an account on Netflix yet?</SignInText>
          <Link to="/JoinNow">
            <SignInhref>Sign up.</SignInhref>
          </Link>
          <BottomText>
            This page uses Google reCAPTCHA security to ensure you are not a
            bot.
          </BottomText>
        </LoginForm>
      </LogInPanel>
    </BackgroundWrapper>
  );
}

export default LogIn;

const LogoImage = styled(motion.img)`
  position: absolute;
  top: 10px;
  left: 10px;
  max-width: 13%;
  cursor: pointer;

  @media (max-width: 768px) {
    max-width: 20%;
  }
`;

const BackgroundWrapper = styled.div`
  background-image: url(${NetflixBackground});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  opacity: 0.8;
`;

const LogInPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 1.2em;
  height: 70vh;
  width: 18vw;
  padding: 50px 80px 20px 80px;
  margin: auto;

  @media (max-width: 768px) {
    width: 80vw;
  }
  @media (max-width: 1324px) {
    width: 80vw;
    height: 70vh;
  }
`;

const Heading = styled.h1`
  color: white;
  font-family: "Bebas Neue", sans-serif;
  font-size: 4em;
  margin: 50px 5% 10px 1%;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 30px;
  border-radius: 5px;
  border: none;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  background-color: #333333;
  color: white;
`;

const ButtonLogIn = styled.button`
  padding: 15px;
  width: 100%;
  color: white;
  background-color: #f40612;
  border: none;
  border-radius: 0.2em;
  cursor: pointer;
  font-size: 1.3em;
  text-align: center;
`;

const CheckBox = styled.label`
  margin: 10px 0 0 0px;
  color: grey;
  font-size: 0.9em;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
`;

const SignInText = styled.p`
  font-family: "Open Sans", sans-serif;
  color: grey;
  margin: 15px 0 5px;
`;

const SignInhref = styled.span`
  font-family: "Open Sans", sans-serif;
  color: white;
  text-decoration: underline;
  cursor: pointer;
  margin: 0;
`;

const BottomText = styled.p`
  font-family: "Open Sans", sans-serif;
  color: grey;
  margin: 2% 0% 0% 0%;
  font-size: 0.9em;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

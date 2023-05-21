import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NetflixIcon from "../img/Netflix.png";

function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NavbarStyle>
      <LogoImage src={NetflixIcon} alt="Logo" onClick={scrollToTop} />
      <LogInDivStyle>
        <NavBarText>UNLIMITED TV SHOWS & MOVIES</NavBarText>
        <Link to="JoinNow">
          <ButtonLogIn>JOIN NOW</ButtonLogIn>
        </Link>
        <Link to="/login">
          <ButtonSignIn>LOG IN</ButtonSignIn>
        </Link>
      </LogInDivStyle>
    </NavbarStyle>
  );
}

const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000000;
  padding: 0px 50px;
  height: 55px;
  position: sticky;
  top: 0;
  z-index: 10;
`;
const NavBarText = styled.div`
  font-size: 2em;
  font-family: "Poppins", sans-serif;
  font-weight: lighter;
  word-spacing: 3px;
  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

const LogoImage = styled.img`
  height: 150%;
  cursor: pointer;
`;

const LogInDivStyle = styled.div`
  display: flex;
  align-items: center;
  text-align: right;
  color: white;
  font-size: 10px;
`;

const ButtonLogIn = styled.button`
  padding: 10px;
  width: 100px;
  color: white;
  background-color: #f40612;
  border: none;
  border-radius: 0.2em;
  cursor: pointer;
  margin: 0px 10px;
  font-size: 1.3em;
`;

const ButtonSignIn = styled.button`
  padding: 10px;
  width: 100px;
  color: white;
  background-color: #000000;
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.2em;
  cursor: pointer;
  margin-right: 40px;
  font-size: 1.3em;
`;

export default Navbar;

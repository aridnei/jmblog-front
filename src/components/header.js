import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.svg";

const Container = styled.header`
  height: 90px;
  text-align: center;
  position: relative;
  border-bottom: 1px solid #ebebeb;

  @media screen and (max-width: 767px) {
    height: 70px;
  }
`;

const Logo = styled.img.attrs({
  src: logo,
  id: "logo"
})`
  max-height: 100%;
  max-width: 100%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Header = props => {
  return (
    <Container>
      <Logo />
    </Container>
  );
};

export default Header;

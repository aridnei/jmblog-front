import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #33cccc;
  text-align: center;
  padding: 30px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Copyright = styled.p`
  color: #fff;
`;

const Footer = props => {
  return (
    <Container>
      <Copyright>©2018 Made with ❤ in Jota</Copyright>
    </Container>
  );
};

export default Footer;

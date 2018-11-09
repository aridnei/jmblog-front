import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  background-color: #f1f3f6;
  text-align: center;
  padding: 30px;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const Copyright = styled.p`
  color: #9b9b9b;
`;

const Footer = props => {
  return (
    <Container>
      <Copyright>©2018 Made with ❤ in Curitiba</Copyright>
    </Container>
  );
};

export default Footer;

import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 25px 40px;
  background-color: ${props => props.color || "transparent"};
  color: ${props => props.textColor || "#FFF"};
  border: 0;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const StdButton = props => {
  return <Button {...props}>{props.label}</Button>;
};

export default StdButton;

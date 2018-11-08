import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  color: #000;
  font-size: 36px;
  margin-bottom: 78px;
`;

const PageTitle = props => {
  return <Title>{props.title}</Title>;
};

export default PageTitle;

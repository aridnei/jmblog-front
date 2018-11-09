import React from "react";
import styled from "styled-components";

const P = styled.p`
  text-align: center;
`;

const EmptyPosts = props => {
  return <P>Nenhum post encontrado</P>;
};

export default EmptyPosts;

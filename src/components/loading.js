import React from "react";
import styled from "styled-components";
import ReactLoading from "react-loading";

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  > div {
    display: inline-block;
  }
`;

const Label = styled.p`
  margin-top: 25px;
  font-size: 18px;
`;

const Loading = props => {
  return (
    <Wrapper>
      <ReactLoading
        type="spinningBubbles"
        color="#33cccc"
        height="60px"
        width="60px"
      />
      <Label>Carregando...</Label>
    </Wrapper>
  );
};

export default Loading;

import React from "react";
import StdButton from "../components/std-button";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 40px;
`;

const NewPostActions = props => {
  return (
    <Wrapper>
      <StdButton style={{ float: "right" }} color="#ff565c" label="Publicar" />
      <StdButton
        style={{ float: "right" }}
        textColor="#ff565c"
        label="Salvar rascunnho"
      />
    </Wrapper>
  );
};

export default NewPostActions;

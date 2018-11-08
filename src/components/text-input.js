import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  margin-bottom: 40px
`;

const InputField = styled.input`
  display: block;
  height: 35px;
  width: 100%;
  padding-left: 20px;
  border: 0
`;

const InputLabel = styled.label`
  margin-bottom: 20px;
  display: inline-block;
`;



const TextInput = (props) => {
  return (
    <InputContainer>
      {props.label && (<InputLabel>{props.label}</InputLabel>)}
      <InputField type="text" {...props} />
    </InputContainer>
  );
}

export default TextInput;
import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: solid 1px #d8dde3;
  height: 68px;
  position: relative;
`;

const Label = styled.h4`
  color: #ff565c;
  font-size: 14px;
  transform: translate(-50%, -50%);
  margin: 0;
`;

const File = styled.input.attrs({
  type: "file"
})`
  display: none;
`;

const FileName = styled.p`
  color: #9b9b9b;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default class AttachmentField extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      attachment: null,
      fileName: null
    };
  }

  handleClick(event) {
    this.fileInput.click();
  }

  handleChange(event) {
    console.log(event.target.files);

    this.setState({
      fileName: event.target.files[0].name
    });
  }

  render() {
    return (
      <Wrapper onClick={this.handleClick}>
        {this.state.fileName ? (
          <FileName>{this.state.fileName}</FileName>
        ) : (
          <Label>Anexar imagem da capa</Label>
        )}

        <File
          ref={fileInput => (this.fileInput = fileInput)}
          onChange={this.handleChange}
        />
      </Wrapper>
    );
  }
}

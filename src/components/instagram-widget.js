import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #f0f5f7;
  padding-top: 70px;
  margin-top: 60px;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  color: #a55cff;
  font-size: 36px;
`;

const Hashtag = styled.a`
  width: 664px;
  height: 48px;
  font-family: Raleway;
  font-size: 36px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #33cccc;

  @media screen and (max-width: 767px) {
    font-size: 26px;
  }
`;

const IframeWrapper = styled.div`
  text-align: center;
  margin-top: 50px;
`;

export default class InstagramWidget extends React.Component {
  componentDidMount() {
    const s = document.createElement("iframe");
    s.async = true;
    s.style = "width:100%;max-width:662px;height:460px;overflow:hidden";
    s.id = "instawidget";
    s.src =
      "https://instawidget.net/embed?u=e3b68c7b53ae16f29e8e15ed5bd59aface4a845fde4f0aad599c843eaee9b5dd";
    this.refs.embedJS.appendChild(s);
  }

  render() {
    return (
      <Wrapper>
        <Title>O novo momento da Jota no instagram</Title>
        <Hashtag>{this.props.hashtag}</Hashtag>
        <IframeWrapper ref="embedJS" />
      </Wrapper>
    );
  }
}

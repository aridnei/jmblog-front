import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
const Title = styled.h2``;
const Hashtag = styled.a``;

export default class InstagramWidget extends React.Component {
  componentDidMount() {
    const s = document.createElement("script");
    s.async = true;
    s.defer = true;
    s.src =
      "https://instawidget.net/js/instawidget.js?u=3539b15dba94c42405851ad7c65a657a4ea8be096062783cf27eb38563fd15b5&width=665px";
    this.refs.embedJS.appendChild(s);
  }

  render() {
    return (
      <Wrapper>
        <Title>O novo momento da Jota no instagram</Title>
        <Hashtag>{this.props.hashtag}</Hashtag>
        <div ref="embedJS" />
      </Wrapper>
    );
  }
}

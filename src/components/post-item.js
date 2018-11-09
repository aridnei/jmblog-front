import React from "react";
import styled from "styled-components";
import Loading from "../components/loading";
import { canvasToBlob } from "blob-util";

import postImage from "../assets/images/post-image.jpg";
import { dataURLToBlob } from "blob-util";

const Wrapper = styled.div`
  max-width: 664px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
`;

const PostImage = styled.img.attrs({
  src: props => "data:image/jpeg;base64," + props.image
})`
  max-width: 100%;
`;

const PostDate = styled.p`
  color: #9b9b9b;
  font-size: 14px;
  margin-top: 20px;
`;

const PostTitle = styled.h1`
  color: #000;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  margin-top: 20px;
  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 32px;
  }
`;

const PostSummary = styled.p`
  color: #000;
  font-size: 18px;
  line-height: 1.44;
  margin-top: 20px;
`;

const Content = styled.div`
  position: relative;

  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`;

const PostLink = styled.a.attrs({
  href: props => "/post/" + props.permalink
})`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

function formatDate(date) {
  let d = new Date();

  var options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return d.toLocaleDateString("pt-BR", options);
}

const PostItem = props => {
  return (
    <Wrapper>
      <Content>
        <PostLink permalink={props.data.permalink} />
        <PostImage name="post-image" image={props.data.imageBase64} />
        <PostTitle name="post-title">{props.data.title}</PostTitle>
        <PostDate name="post-date">
          {formatDate(props.data.datePublished)}
        </PostDate>
        <PostSummary name="post-summary">
          {props.data.summary + "..."}
        </PostSummary>
      </Content>
    </Wrapper>
  );
};

export default PostItem;

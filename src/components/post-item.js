import React from "react";
import styled from "styled-components";

import postImage from "../assets/images/post-image.jpg";

const Wrapper = styled.div`
  max-width: 664px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
`;

const PostImage = styled.img.attrs({
  src: postImage
})`
  max-width: 100%;
  margin-bottom: 40px;
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
  href: "/post/the-beauty-of-astronomy-is-that-anybody-can-do-it"
})`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
`;

const PostItem = props => {
  return (
    <Wrapper>
      <Content>
        <PostLink />
        <PostImage />
        <PostTitle>
          Apocalyptic looks for your 2018 mood, from Rick Owens
        </PostTitle>
        <PostDate>21 out 2018</PostDate>
        <PostSummary>
          Alice was beginning to get very tired of sitting by her sister on the
          bank, and of having nothing to do: once or twice she had peeped into
          the book her sister was reading, but it had no pictures...
        </PostSummary>
      </Content>
    </Wrapper>
  );
};

export default PostItem;

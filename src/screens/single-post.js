import React from "react";
import styled from "styled-components";

import postImage from "../assets/images/post-image.jpg";
import Header from "../components/header";
import Footer from "../components/footer";

const PageContent = styled.div`
  max-width: 664px;
  margin-left: auto;
  margin-right: auto;
  padding: 46px 15px;

  @media screen and (max-width: 767px) {
    padding: 30px;
  }
`;

const PostTitle = styled.h1`
  color: #000;
  font-size: 48px;
  line-height: 60px;
  letter-spacing: 1px;
  margin-bottom: 20px;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;
    font-size: 24px;
    line-height: 32px;
  }
`;

const PostP = styled.p`
  color: #606265;
  margin-bottom: 20px;
  line-height: 1.44;
`;

const PostImage = styled.img.attrs({
  src: postImage
})`
  max-width: 100%;
`;

const PostDate = styled.p`
  color: #9b9b9b;
  font-size: 14px;
`;

const PostContent = styled.div`
  padding-top: 60px;

  @media screen and (max-width: 767px) {
    padding-top: 30px;
  }
`;

export default class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <React.Fragment>
        <PostImage />
        <PageContent>
          <PostTitle>
            The beauty of astronomy is that anybody can do it
          </PostTitle>
          <PostDate>12 out 2018</PostDate>
          <PostContent>
            <PostP>
              There is a lot of exciting stuff going on in the stars above us
              that makes astronomy so much fun. The universe is constantly
              changing and moving. Some would say it’s a living thing because
              you never know what you are going to see on any given night of
              stargazing.
            </PostP>
            <PostP>
              Of the many celestial phenomenons, there is probably none as
              exciting as when you see your first asteroid on the move in the
              heavens. To call asteroids the “rock stars” of astronomy is both a
              bad joke and an accurate depiction of how astronomy fans view
              them. Unlike suns, planets, and moons, asteroids are on the move,
              ever changing and, if they appear in the night sky, they are
              exciting and dynamic.
            </PostP>
            <PostP>
              There is a lot of exciting stuff going on in the stars above us
              that makes astronomy so much fun. The universe is constantly
              changing and moving. Some would say it’s a “living” thing because
              you never know what you are going to see on any given night of
              stargazing.
            </PostP>
            <PostP>
              Of the many celestial phenomenons, there is probably none as
              exciting as when you see your first asteroid on the move in the
              heavens. To call asteroids the “rock stars” of astronomy is both a
              bad joke and an accurate depiction of how astronomy fans view
              them. Unlike suns, planets, and moons, asteroids are on the move,
              ever-changing, and, if they appear in the night sky, they are
              exciting and dynamic.
            </PostP>
          </PostContent>
        </PageContent>
      </React.Fragment>
    );
  }
}

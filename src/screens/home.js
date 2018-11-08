import React from "react";
import styled from "styled-components";

import PostItem from "../components/post-item";

const PageContent = styled.div`
  max-width: 664px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

export default class Home extends React.Component {
  render() {
    return (
      <PageContent>
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
      </PageContent>
    );
  }
}

import React from "react";
import styled from "styled-components";

import PostItem from "../components/post-item";
import Loading from "../components/loading";

const PageContent = styled.div`
  max-width: 664px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: false
    };
  }

  componentDidMount() {}

  render() {
    return (
      <PageContent>
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </React.Fragment>
        )}
      </PageContent>
    );
  }
}

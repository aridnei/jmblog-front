import React from "react";
import styled from "styled-components";

import PostItem from "../components/post-item";
import Loading from "../components/loading";
import { getPosts } from "../services/posts-api";

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
      loading: true
    };
  }

  componentDidMount() {
    getPosts(result => {
      this.setState({
        posts: result,
        loading: false
      });
    });
  }

  render() {
    return (
      <PageContent>
        {this.state.loading ? (
          <Loading />
        ) : (
          <React.Fragment>
            {this.state.posts.map((p, index) => {
              return <PostItem key={index} data={p} />;
            })}
          </React.Fragment>
        )}
      </PageContent>
    );
  }
}

import React from "react";
import styled from "styled-components";

import postImage from "../assets/images/post-image.jpg";
import Loading from "../components/loading";
import { getPost } from "../services/posts-api";

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
  src: props => "data:image/jpeg;base64," + props.image
})`
  width: 100%;
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

function formatDate(date) {
  let d = new Date(date);

  var options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return d.toLocaleDateString("pt-BR", options);
}

export default class SinglePost extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      data: null,
      loading: true
    };
  }

  componentDidMount() {
    const permalink = this.props.match.params.id;

    getPost(permalink, result => {
      console.log(result);

      this.setState({
        data: result,
        loading: false
      });
    });
  }

  formatContent() {}

  render() {
    return (
      <React.Fragment>
        {this.state.loading ? (
          <PageContent>
            <Loading />
          </PageContent>
        ) : (
          <React.Fragment>
            <PostImage image={this.state.data.imageBase64} />
            <PageContent>
              <PostTitle>{this.state.data.title}</PostTitle>
              <PostDate>{formatDate(this.state.data.datePublished)}</PostDate>
              <PostContent>
                <PostP
                  dangerouslySetInnerHTML={{ __html: this.state.data.text }}
                />
              </PostContent>
            </PageContent>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

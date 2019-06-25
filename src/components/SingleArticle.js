import React, { Component } from "react";
import { fetchArticleById } from "../api";
import Comments from "./Comments";

class SingleArticle extends Component {
  state = {
    singleArticle: {}
  };
  render() {
    const { singleArticle } = this.state;
    return (
      <div>
        <h4>{singleArticle.title}</h4>
        <p>Topic: {singleArticle.topic}</p>
        <p>Author: {singleArticle.author}</p>
        <p>Body: {singleArticle.body}</p>
        <p>Created at: {`${new Date(singleArticle.created_at)}`}</p>
        <p>Comment count: {singleArticle.comment_count}</p>
        <p>Votes: {singleArticle.votes}</p>
        <h4>Comments</h4>
        <Comments article_id={this.props.article_id} />
      </div>
    );
  }
  componentDidMount() {
    fetchArticleById(this.props.article_id).then(({ article }) => {
      this.setState({ singleArticle: article });
    });
  }
}

export default SingleArticle;

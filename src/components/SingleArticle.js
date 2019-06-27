import React, { Component } from "react";
import { fetchArticleById } from "../api";
import Comments from "./Comments";

import Voter from "./Voter";
import Error from "./Error";

class SingleArticle extends Component {
  state = {
    singleArticle: {},
    isLoading: true,
    error: null
  };

  render() {
    console.log("rendering");

    const { singleArticle, error } = this.state;
    if (error) return <Error error={error} />;

    return (
      <div>
        <h4>{singleArticle.title}</h4>
        <p>Topic: {singleArticle.topic}</p>
        <p>Author: {singleArticle.author}</p>
        <p>Body: {singleArticle.body}</p>
        <p>Created at: {`${new Date(singleArticle.created_at)}`}</p>
        <p>Comment count: {singleArticle.comment_count}</p>
        <Voter
          votes={singleArticle.votes}
          article_id={singleArticle.article_id}
        />
        <h4>Comments</h4>
        <Comments article_id={this.props.article_id} />
      </div>
    );
  }

  componentDidMount() {
    console.log("mounting");
    fetchArticleById(this.props.article_id)
      .then(({ article }) => {
        if (article.author) {
          this.setState({
            singleArticle: article,
            isLoading: false,
            error: null
          });
        }
      })
      .catch(err => {
        console.log(err);
        this.setState({ error: err, isLoading: false });
      });
  }
}

export default SingleArticle;

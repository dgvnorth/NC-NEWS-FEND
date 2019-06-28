import React, { Component } from "react";
import * as api from "../api";
import Comments from "./Comments";
import moment from "moment";
import Voter from "./Voter";
import Error from "./Error";

class SingleArticle extends Component {
  state = {
    singleArticle: {},
    isLoading: true,
    error: null
  };

  updateCommentCount = increament => {
    this.setState(prevState => {
      const sum =
        Number(prevState.singleArticle.comment_count) + Number(increament);
      return {
        singleArticle: {
          ...prevState.singleArticle,
          comment_count: sum
        }
      };
    });
  };

  render() {
    const { singleArticle, error, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <Error error={error} />;

    return (
      <div className="ui container segment">
        <a className="ui grey ribbon label">Article Info</a>
        <h4>Title: {singleArticle.title}</h4>
        <p>Topic: {singleArticle.topic}</p>
        <p>Author: {singleArticle.author}</p>
        <p>Body: {singleArticle.body}</p>
        <p>
          Created at: {`${moment(singleArticle.created_at).format("LLLL")}`}
        </p>
        <p>Comment count: {this.state.singleArticle.comment_count} </p>
        <Voter
          votes={singleArticle.votes}
          article_id={singleArticle.article_id}
        />
        <br />
        <br />
        <Comments
          username={this.props.username}
          article_id={this.props.article_id}
          updateCommentCount={this.updateCommentCount}
        />
      </div>
    );
  }

  componentDidMount() {
    api
      .fetchArticleById(this.props.article_id)
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
        this.setState({ error: err, isLoading: false });
      });
  }
}

export default SingleArticle;

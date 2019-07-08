import React, { Component } from "react";
import * as api from "../api";
import Comments from "./Comments";
import moment from "moment";
import ArticleVoter from "./ArticleVoter";
import Error from "./Error";

class SingleArticle extends Component {
  state = {
    singleArticle: {},
    isLoading: true,
    error: null
  };

  updateCommentCount = increment => {
    this.setState(prevState => {
      const sum =
        Number(prevState.singleArticle.comment_count) + Number(increment);
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
    const { article_id, username } = this.props;

    if (isLoading)
      return (
        <div className="ui segment">
          <br />
          <br />
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p />
        </div>
      );
    if (error) return <Error error={error} />;

    return (
      <div className="ui container segment">
        <button className="ui grey ribbon label">Article Info</button>
        <h4>Title: {singleArticle.title}</h4>
        <p>Topic: {singleArticle.topic}</p>
        <p>Author: {singleArticle.author}</p>
        <p>Body: {singleArticle.body}</p>
        <p>
          Created at: {`${moment(singleArticle.created_at).format("LLLL")}`}
        </p>
        <p>Comment count: {singleArticle.comment_count} </p>
        <ArticleVoter
          votes={singleArticle.votes}
          article_id={singleArticle.article_id}
        />
        <br />
        <br />
        <Comments
          username={username}
          article_id={article_id}
          updateCommentCount={this.updateCommentCount}
        />
      </div>
    );
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .fetchArticleById(article_id)
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

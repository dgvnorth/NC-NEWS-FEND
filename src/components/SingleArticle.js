import React, { Component } from "react";
import { fetchArticleById } from "../api";
import Comments from "./Comments";
import { Router } from "@reach/router";
import AddComment from "./AddComment";
import * as api from "../api";
import Voter from "./Voter";

class SingleArticle extends Component {
  state = {
    singleArticle: {}
  };

  addNewComment = newComment => {
    const { singleArticle } = this.state;
    api
      .fetchAddedComment(singleArticle.article_id, newComment)
      .then(newComment => {
        this.setState(prevState => {
          const { singleArticle } = this.state;
          return (singleArticle.comment = newComment.comment);
        });
      });
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
        {/* <p>Votes: {singleArticle.votes}</p> */}
        <Voter
          votes={singleArticle.votes}
          article_id={singleArticle.article_id}
        />
        <h4>Comments</h4>
        <Router>
          <AddComment path="addcomment" addNewComment={this.addNewComment} />
        </Router>
        <br />
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

import React, { Component } from "react";
import { fetchArticleById } from "../api";
import Comments from "./Comments";
import axios from "axios";
import { Router } from "@reach/router";
import AddComment from "./AddComment";

class SingleArticle extends Component {
  state = {
    singleArticle: {}
  };

  addNewComment = newComment => {
    console.log("CM");
    const { singleArticle } = this.state;
    return axios
      .post(
        `https://dgv-nc-news.herokuapp.com/api/articles/${
          singleArticle.article_id
        }/comments`,
        newComment
      )
      .then(({ data }) => {
        console.log(data);
        console.log(singleArticle);
        this.setState(prevState => {
          const { singleArticle } = this.state;
          return (singleArticle.comment = data.comment);
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
        <p>Votes: {singleArticle.votes}</p>
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

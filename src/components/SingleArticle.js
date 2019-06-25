import React, { Component } from "react";
import { fetchArticleById } from "../api";

class SingleArticle extends Component {
  state = {
    singleArticle: {}
  };
  render() {
    const { singleArticle } = this.state;
    // const articleEntries = Object.entries(singleArticle);
    // console.log(articleEntries);
    return (
      <div>
        <h4>{singleArticle.title}</h4>
        <ul>
          <li>Topic: {singleArticle.topic}</li>
          <li>Author: {singleArticle.author}</li>
          <li>Body: {singleArticle.body}</li>
          <li>Created at: {singleArticle.created_at}</li>
          <li>Comment count: {singleArticle.comment_count}</li>
          <li>Votes: {singleArticle.votes}</li>
        </ul>
      </div>
    );
  }
  componentDidMount() {
    fetchArticleById(this.props.article_id).then(({ article }) => {
      console.log(article, "IA");
      this.setState({ singleArticle: article });
    });
  }
}

export default SingleArticle;

import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <Link to={`../../articles/${article.article_id}`}>
        <h4>{article.title}</h4>
      </Link>
      <p>Topic: {article.topic}</p>
      <p>Author: {article.author}</p>
      <p>Body: {article.body}</p>
      <p>Created at: {`${new Date(article.created_at)}`}</p>
      <p>Comment count: {article.comment_count}</p>
      <p>Votes: {article.votes}</p>
    </div>
  );
};

export default ArticleCard;

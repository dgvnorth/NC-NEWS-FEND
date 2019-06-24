import React from "react";
import { Router, Link } from "@reach/router";
import SingleArticle from "./SingleArticle";

const ArticleCard = ({ article }) => {
  return (
    <tr>
      <td>{article.topic}</td>
      <td>
        <Link to={`${article._id}`}>{article.title}</Link>
      </td>
      <Router>
        <SingleArticle
          path="articles/:article_id"
          article={this.props.article}
        />
      </Router>
    </tr>
  );
};

export default ArticleCard;

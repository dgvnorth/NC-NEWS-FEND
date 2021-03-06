import React from "react";
import { Link } from "@reach/router";
import moment from "moment";

const ArticleCard = ({ article }) => {
  return (
    <div className="ui grey raised segment SingleArticle">
      <Link to={`/articles/${article.article_id}`}>
        <button className="ui red ribbon label">{article.topic}</button>
        <h4>{article.title}</h4>
      </Link>
      <div className="articleRest">
        <br />
        <p>Author: {article.author}</p>
        <p>Created at: {`${moment(article.created_at).format("LLLL")}`}</p>
        <p>Comments: {article.comment_count}</p>
        <div className="ui label">
          <i className="heart icon" /> {article.votes}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;

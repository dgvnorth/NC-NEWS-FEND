import React from "react";
import { Link } from "@reach/router";
import moment from "moment";

const ArticleCard = ({ article }) => {
  return (
    <div className="ui grey segment SingleArticle">
      <Link to={`/articles/${article.article_id}`}>
        <a className="ui red ribbon label">{article.topic}</a>
        <h4>{article.title}</h4>
        <div className="articleRest">
          <p>Author: {article.author}</p>
          <p>Created at: {`${moment(article.created_at).format("LLLL")}`}</p>
          <p>Comments: {article.comment_count}</p>
          <div className="ui label">
            <i className="heart icon" /> {article.votes}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;

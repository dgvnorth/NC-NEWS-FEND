import React from "react";
import { Link } from "@reach/router";

const ArticleCard = ({ article }) => {
  return (
    <tr>
      <td>{article.topic}</td>
      <td>
        <Link to={`${article._id}`}>{article.title}</Link>
      </td>
    </tr>
  );
};

export default ArticleCard;

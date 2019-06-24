import React from "react";
import ArticleCard from "./ArticleCard";
// import { Link } from "@reach/router";

const AllArticles = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      <h4>All Articles: {articles.length}</h4>
      <table>
        <tr id="allArticles">
          <th>Topic</th>
          <th>Title</th>
        </tr>
        {articles.map(article => {
          return <ArticleCard article={article} key={article._id} />;
        })}
      </table>
    </div>
  );
};

export default AllArticles;

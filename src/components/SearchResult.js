import React from "react";
import ArticleCard from "./ArticleCard";

function SearchResult({ articles }) {
  return articles.map((article, i) => (
    <ArticleCard article={article} key={i} />
  ));
}

export default SearchResult;

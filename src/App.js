import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Router>
        <ArticleList path="topics/:topic" />
        <ArticleList path="topics/all" />
        <SingleArticle path="articles/:article_id" />
      </Router>
    </div>
  );
};

export default App;

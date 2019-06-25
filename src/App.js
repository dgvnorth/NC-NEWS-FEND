import React from "react";
import "./App.css";
import { Router } from "@reach/router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import Error from "./components/Error";

const App = () => {
  return (
    <div>
      <Header />
      <NavBar />
      <Router>
        <Home path="/" />
        <ArticleList path="topics/:topic" />
        <ArticleList path="topics/all" />
        <SingleArticle path="articles/:article_id" />
        <Error default />
      </Router>
    </div>
  );
};

export default App;

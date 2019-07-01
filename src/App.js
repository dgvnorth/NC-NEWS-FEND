import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ArticleList from "./components/ArticleList";
import SingleArticle from "./components/SingleArticle";
import Error from "./components/Error";

class App extends Component {
  state = {
    username: "jessjelly"
  };

  render() {
    const { username } = this.state;
    return (
      <div>
        <Header />
        <NavBar />
        <Router>
          <ArticleList path="/" username={username} />
          <ArticleList path="topics/:topic/" username={username} />
          <ArticleList path="topics/:article_id/" username={username} />
          <SingleArticle path="articles/:article_id/*" username={username} />
          <Error default />
        </Router>
      </div>
    );
  }
}

export default App;

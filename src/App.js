import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import { Router } from "@reach/router";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import AllArticles from "./components/AllArticles";

class App extends Component {
  state = {
    allArticles: []
  };

  render() {
    const { allArticles } = this.state;
    return (
      <div>
        <Header />
        <NavBar />
        <AllArticles articles={allArticles} />
      </div>
    );
  }
  componentDidMount() {
    return axios
      .get(`https://dgv-nc-news.herokuapp.com/api/articles`)
      .then(({ data: articles }) => {
        this.setState({ allArticles: articles.articles });
      });
  }
}

export default App;

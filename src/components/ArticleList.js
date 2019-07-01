import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import Error from "./Error";
import SortBy from "./SortBy";

class ArticleList extends Component {
  state = {
    articlesArray: [],
    error: null,
    isLoading: true,
    sortBy: "created_at",
    order: "desc",
    name: "",
    avatar_url: ""
  };

  searchArticles = searchInput => {
    this.setState({
      keywords: searchInput
    });
  };

  getUserByUsername = username => {
    api.fetchUser(username).then(({ user }) => {
      this.setState({
        avatar_url: user.avatar_url,
        name: user.name
      });
    });
  };

  setSortBy = sortByCriteria => {
    this.setState({
      sortBy: sortByCriteria
    });
  };

  setOrder = orderCriteria => {
    this.setState({
      order: orderCriteria
    });
  };

  render() {
    const { articlesArray, error, isLoading, name, avatar_url } = this.state;
    const { topic } = this.props;
    if (isLoading)
      return (
        <div className="ui segment">
          <br />
          <br />
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
          <p />
        </div>
      );
    if (error) return <Error error={error} />;
    return (
      <div className="ui container grey raised segment">
        <p>
          Hi! You are logged as:{" "}
          <img className="ui avatar image" src={avatar_url} alt="user avatar" />
          <span>{name}</span>
          <br />
        </p>
        <SortBy setSortBy={this.setSortBy} setOrder={this.setOrder} />
        Number of {topic} articles: {articlesArray.length}
        {articlesArray.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    );
  }

  fetchArticles = () => {
    const { sortBy, order, keywords } = this.state;
    const { topic } = this.props;
    api
      .getArticles(topic, sortBy, order, keywords)
      .then(articles => {
        this.setState({
          articlesArray: articles,
          isLoading: false,
          error: null
        });
      })
      .catch(err => {
        this.setState({ error: err, isLoading: false });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    const { sortBy, order } = this.state;
    if (
      prevProps.topic !== topic ||
      sortBy !== prevState.sortBy ||
      order !== prevState.order
    ) {
      this.fetchArticles();
    }
  }
  componentDidMount() {
    const { username } = this.props;
    this.getUserByUsername(username);
    this.fetchArticles();
  }
}

export default ArticleList;

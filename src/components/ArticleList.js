import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import Error from "./Error";
import SortBy from "./SortBy";

class ArticleList extends Component {
  state = {
    articlesByTopic: [],
    error: null,
    isLoading: true,
    sortBy: "created_at",
    order: "desc",
    name: "",
    avatar_url: ""
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
    const { articlesByTopic, error, isLoading, name, avatar_url } = this.state;
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
      <div className="ui container segment">
        <p>
          Hi! You are logged as:{" "}
          <img
            src={avatar_url}
            alt="user avatar"
            height="42"
            width="42"
            align="middle"
          />{" "}
          {name}
          <br />
        </p>
        <SortBy setSortBy={this.setSortBy} setOrder={this.setOrder} />
        Number of {topic} articles: {articlesByTopic.length}
        {articlesByTopic.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    );
  }

  fetchArticles = () => {
    const { sort_by, order } = this.state;
    const { topic } = this.props;
    api
      .getArticles(topic, sort_by, order)
      .then(articles => {
        this.setState({
          articlesByTopic: articles,
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
    if (
      prevProps.topic !== topic ||
      this.state.sortBy !== prevState.sortBy ||
      this.state.order !== prevState.order
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

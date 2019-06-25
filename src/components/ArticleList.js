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
    sortBy: "created_at"
  };

  handleClick = sortByCriteria => {
    this.setState({
      sortBy: sortByCriteria
    });
  };

  render() {
    const { articlesByTopic, error, isLoading } = this.state;
    if (isLoading) return <p>Loading...</p>;
    if (error) return <Error error={error} />;
    return (
      <div>
        <p>
          Number of {this.props.topic} articles: {articlesByTopic.length}
        </p>
        <SortBy handleClick={this.handleClick} />
        {articlesByTopic.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    );
  }

  fetchArticles = (topic, sort_by) => {
    api
      .fetchArticlesByTopic(topic, sort_by)
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
    if (prevProps.topic !== topic || this.state.sortBy !== prevState.sortBy) {
      this.fetchArticles(topic, this.state.sortBy);
    }
  }
  componentDidMount() {
    this.fetchArticles(this.props.topic, this.state.sortBy);
  }
}

export default ArticleList;

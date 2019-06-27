import React, { Component } from "react";
import * as api from "../api";
import ArticleCard from "./ArticleCard";
import Error from "./Error";
import SortBy from "./SortBy";
import OrderBy from "./OrderBy";

class ArticleList extends Component {
  state = {
    articlesByTopic: [],
    error: null,
    isLoading: true,
    sortBy: "created_at",
    order: "desc"
  };

  setSortBy = sortByCriteria => {
    this.setState({
      sortBy: sortByCriteria
    });
  };

  setOrder = orderCriteria => {
    console.log(orderCriteria);
    this.setState({
      order: orderCriteria
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
        <SortBy setSortBy={this.setSortBy} />
        <OrderBy setOrder={this.setOrder} />
        {articlesByTopic.map((article, i) => {
          return <ArticleCard article={article} key={i} />;
        })}
      </div>
    );
  }

  fetchArticles = (topic, sort_by, order) => {
    api
      .fetchArticlesByTopic(topic, sort_by, order)
      .then(articles => {
        this.setState({
          articlesByTopic: articles,
          isLoading: false,
          error: null
        });
      })
      .catch(err => {
        console.log(err);
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
      this.fetchArticles(topic, this.state.sortBy, this.state.order);
    }
  }
  componentDidMount() {
    this.fetchArticles(this.props.topic, this.state.sortBy, this.state.order);
  }
}

export default ArticleList;

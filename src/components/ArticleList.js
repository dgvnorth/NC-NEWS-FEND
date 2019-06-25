import React, { Component } from "react";
// import { fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";
import Error from "./Error";
import * as api from "../api";

class ArticleList extends Component {
  state = {
    articlesByTopic: [],
    error: null,
    isLoading: true
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
        <table>
          <tbody>
            <tr id="allArticles">
              <th>Topic</th>
              <th>Title</th>
            </tr>
            {articlesByTopic.map((article, i) => {
              return <ArticleCard article={article} key={i} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api
      .fetchArticlesByTopic(topic)
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

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles();
    }
  }
  componentDidMount() {
    this.fetchArticles();
  }
}

export default ArticleList;

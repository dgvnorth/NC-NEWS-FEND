import React, { Component } from "react";
import { fetchArticlesByTopic } from "../api";
import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = {
    articlesByTopic: []
  };
  render() {
    const { articlesByTopic } = this.state;
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

  componentDidUpdate(prevProps) {
    if (prevProps.topic !== this.props.topic) {
      const { topic } = this.props;
      fetchArticlesByTopic(topic).then(articles => {
        this.setState({ articlesByTopic: articles });
      });
    }
  }
  componentDidMount() {
    const { topic } = this.props;
    fetchArticlesByTopic(topic).then(articles => {
      this.setState({ articlesByTopic: articles });
    });
  }
}

export default ArticleList;

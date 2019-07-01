//ArticleList
import SearchForm from "./SearchForm";
import SearchResult from "./SearchResult";

//keyword: '' in state

clearSearch = () => {
  this.setState({
    keywords: ""
  });
};

//in render after SortBy
<SearchForm
  searchArticles={this.searchArticles}
  clearSearch={this.clearSearch}
  fetchArticles={this.fetchArticles}
/>;
{
  keywords.length > 0 ? (
    <SearchResult
      articles={articlesArray}
      clearSearch={this.clearSearch}
      isLoading={isLoading}
    />
  ) : (
    articlesArray.map((article, i) => {
      return <ArticleCard article={article} key={i} />;
    })
  );
}
// didUpdate
keywords !== prevState.keywords;

//component

import React from "react";

class SearchForm extends React.Component {
  state = {
    searchInput: ""
  };

  handleChange = event => {
    event.preventDefault();
    const { value } = event.target;
    this.setState({
      searchInput: value
    });
  };

  handleSubmit = event => {
    const { searchInput } = this.state;
    event.preventDefault();
    this.props.searchArticles(searchInput);
    setTimeout(function() {}, 2000);
    this.setState({
      searchInput: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="ArticleSearched"
            placeholder=" enter search here!"
            value={this.state.searchInput}
            onChange={this.handleChange}
          />
        </label>
        <button
          onClick={() => {
            this.props.clearSearch();
          }}
          className="tiny compact grey ui button"
        >
          Search
        </button>
        {/* <button
          onClick={() => {
            this.props.clearSearch();
            this.props.fetchArticles();
          }}
          className="tiny compact grey ui button"
        >
          Back to Results
        </button> */}
      </form>
    );
  }
}

export default SearchForm;


//component
import React from "react";
import ArticleCard from "./ArticleCard";

const SearchResult = props => {
  props.clearSearch();
  const { isLoading } = props;
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
  return props.articles.map((article, i) => (
    <ArticleCard article={article} key={i} />
  ));
};

export default SearchResult;

//api

export const getArticles = (topic, sort_by, order, keywords) => {
    return request
      .get(`articles`, {
        params: {
          topic: topic,
          sort_by: sort_by,
          order: order,
          search: keywords
        }
      })
      .then(({ data }) => {
        return data.articles;
      });
  };
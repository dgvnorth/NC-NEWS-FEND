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
    event.preventDefault();
    this.props.searchArticles(this.state.searchInput);
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
        <button className="tiny compact grey ui button">Search</button>
      </form>
    );
  }
}

export default SearchForm;

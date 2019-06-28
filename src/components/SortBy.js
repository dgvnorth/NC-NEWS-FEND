import React, { Component } from "react";

class SortBy extends Component {
  state = {
    showMenu: false
  };

  displayMenu = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  };

  render() {
    return (
      <div>
        <button
          className="mini black ui basic button"
          onClick={this.displayMenu}
        >
          Sort by
        </button>
        {this.state.showMenu ? (
          <div className="menu">
            <button
              className="tiny compact ui grey button"
              onClick={() => this.props.setSortBy("created_at")}
            >
              Date Created
            </button>
            <button
              className="tiny compact ui grey button"
              onClick={() => this.props.setSortBy("comment_count")}
            >
              {" "}
              Comment Count{" "}
            </button>
            <button
              className="tiny compact ui grey button"
              onClick={() => this.props.setSortBy("votes")}
            >
              {" "}
              Votes{" "}
            </button>
            <button
              className="tiny compact ui blue button"
              onClick={() => this.props.setOrder("asc")}
            >
              {" "}
              Ascending{" "}
            </button>
            <button
              className="tiny compact ui blue button"
              onClick={() => this.props.setOrder("desc")}
            >
              {" "}
              Descending{" "}
            </button>
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default SortBy;

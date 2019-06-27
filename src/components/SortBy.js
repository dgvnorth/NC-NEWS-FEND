import React, { Component } from "react";

class SortBy extends Component {
  state = {
    showMenu: false
  };

  showMenu = event => {
    event.preventDefault();
    this.setState(prevState => {
      return { showMenu: !prevState.showMenu };
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Sort by</button>
        {this.state.showMenu ? (
          <div className="menu">
            <button onClick={() => this.props.setSortBy("created_at")}>
              Date Created
            </button>
            <button onClick={() => this.props.setSortBy("comment_count")}>
              {" "}
              Comment Count{" "}
            </button>
            <button onClick={() => this.props.setSortBy("votes")}>
              {" "}
              Votes{" "}
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

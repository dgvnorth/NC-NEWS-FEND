import React, { Component } from "react";
// import OrderBy from "./OrderBy";

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

  // setOrder = orderCriteria => {
  //   this.setState({
  //     order: orderCriteria
  //   });
  // };

  render() {
    return (
      <div>
        <button className="mini black ui basic button" onClick={this.showMenu}>
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
            {/* <div className="menu"> */}
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
            {/* </div> */}
            {/* <OrderBy setOrder={this.setOrder} /> */}
          </div>
        ) : (
          false
        )}
      </div>
    );
  }
}

export default SortBy;

import React, { Component } from "react";

class Order extends Component {
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
        <button onClick={this.showMenu}>Order by</button>
        {this.state.showMenu ? (
          <div className="menu">
            <button onClick={() => this.props.setOrder("asc")}>
              {" "}
              Ascending{" "}
            </button>
            <button onClick={() => this.props.setOrder("desc")}>
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

export default Order;

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
        {/* <div
          onClick={this.showMenu}
          class="mini ui animated button"
          tabindex="0"
        >
          <div class="visible content">Sort By</div>
          {/* <div class="hidden content">
            <i class="sort amount down" />
          </div> */}
        {/* </div> } */}
        <button className="mini grey ui basic button" onClick={this.showMenu}>
          Order
        </button>
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

import React, { Component } from "react";
import * as api from "../api";

class Home extends Component {
  state = {
    username: "jessjelly",
    name: "",
    avatar_url: ""
  };

  getUserByUsername = username => {
    api.fetchUser(username).then(({ user }) => {
      this.setState({
        avatar_url: user.avatar_url,
        name: user.name
      });
    });
  };
  render() {
    return (
      <div>
        <p>
          Hi! You are logged as:{""}
          <br />
          <img
            src={this.state.avatar_url}
            alt="user avatar"
            height="42"
            width="42"
            align="middle"
          />{" "}
          {this.state.name}{" "}
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.getUserByUsername(this.state.username);
  }
}

export default Home;

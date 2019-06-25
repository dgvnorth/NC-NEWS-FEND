import React, { Component } from "react";

class AddComment extends Component {
  state = {
    newComment: {
      username: "jessjelly",
      body: ""
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addNewComment(this.state.newComment);
  };

  handleComment = event => {
    const { value } = event.target;
    this.setState(prevState => {
      const { newComment } = prevState;
      return {
        newComment: { ...newComment, body: value }
      };
    });
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <label>
          Enter username...
          <input
            type="text"
            name="username"
            value="jessjelly"
            onChange={this.handleComment}
          />
        </label>
        <br />
        <label>
          Enter comment...
          <input type="text" name="newComment" onChange={this.handleComment} />
        </label>
        <br />
        <button>Enter</button>
      </form>
    );
  }
}

export default AddComment;

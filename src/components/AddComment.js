import React, { Component } from "react";

class AddComment extends Component {
  state = {
    newComment: {
      username: "jessjelly",
      body: ""
    },
    bodyInput: ""
  };

  handleSubmit = event => {
    const { newComment } = this.state;
    event.preventDefault();
    if (newComment.body.length > 0) {
      this.props.addNewComment(newComment);
    }
    // this.setState({
    //   bodyInput: ""
    // });
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
          <input
            type="text"
            name="newComment"
            // value={this.state.bodyInput}
            onChange={this.handleComment}
          />
        </label>
        <br />
        <button>Enter</button>
      </form>
    );
  }
}

export default AddComment;

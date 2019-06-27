import React, { Component } from "react";

class AddComment extends Component {
  state = {
    newComment: {
      username: "jessjelly",
      body: ""
    }
  };

  handleSubmit = event => {
    const { newComment } = this.state;
    event.preventDefault();
    if (newComment.body.length > 0) {
      this.props.addNewComment(newComment);
    }
    this.setState({
      newComment: { ...newComment, body: "" }
    });
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
        <p>Add New Comment</p>
        <label>
          Username...
          <input
            type="text"
            name="username"
            value="jessjelly"
            onChange={this.handleComment}
          />
        </label>
        <br />
        <label>
          Comment...
          <input
            type="text"
            name="newComment"
            placeholder="enter new comment here"
            value={this.state.newComment.body}
            onChange={this.handleComment}
            required
          />
        </label>
        <br />
        <button>Enter Comment</button>
      </form>
    );
  }
}

export default AddComment;

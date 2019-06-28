import React, { Component } from "react";

class AddComment extends Component {
  state = {
    commentBody: ""
  };

  handleSubmit = event => {
    const { commentBody } = this.state;
    const { username } = this.props;
    const addedComment = {
      username: username,
      body: commentBody
    };
    event.preventDefault();

    if (commentBody) {
      this.props.addNewComment(addedComment);
    }
    this.setState({
      commentBody: ""
    });
  };

  handleComment = event => {
    const { value } = event.target;
    this.setState(prevState => {
      return {
        commentBody: value
      };
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <a className="ui blue ribbon label">Post a Comment</a>
        <br />
        <br />
        <p>You are logged as: {this.props.username}</p>
        <label>
          <input
            type="text"
            name="newComment"
            placeholder="Enter New Comment Here"
            value={this.state.commentBody}
            onChange={this.handleComment}
            required
          />
        </label>
        <br />
        <br />
        <button className="ui mini labeled icon button">
          <i className="mail icon" />
          Enter Comment
        </button>
      </form>
    );
  }
}

export default AddComment;

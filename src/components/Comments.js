import React, { Component } from "react";
import { fetchComments } from "../api";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    const { comments } = this.state;
    return (
      <div>
        {comments.map((comment, i) => {
          return (
            <div key={comment.comment_id}>
              <h4>{`Author: ${comment.author}`}</h4>
              <p>{`Comment ID: ${comment.comment_id}`}</p>
              <p>{`${comment.body}`}</p>
              <p>{`Created at: ${new Date(comment.created_at)}`}</p>
              <p>{`Votes: ${comment.votes}`}</p>
            </div>
          );
        })}
      </div>
    );
  }
  componentDidMount() {
    fetchComments(this.props.article_id)
      .then(({ comments }) => {
        this.setState({ comments: comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: err, isLoading: false });
      });
  }
}

export default Comments;

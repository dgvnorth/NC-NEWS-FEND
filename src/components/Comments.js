import React, { Component } from "react";
import * as api from "../api";
import Voter from "./Voter";
import AddComment from "./AddComment";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  deleteComment = comment_id => {
    console.log(this.state.comments);
    api.deleteComment(comment_id).then(() => {
      const { comments } = this.state;
      const updatedComments = comments.filter(
        comment => comment.comment_id !== comment_id
      );
      console.log(updatedComments);
      this.setState({
        comments: updatedComments
      });
    });
  };

  addNewComment = newComment => {
    const { comments } = this.state;
    console.log(comments);
    api
      .fetchAddedComment(this.props.article_id, newComment)
      .then(newComment => {
        console.log(newComment.comment);
        this.setState(
          prevState => {
            const { comments } = prevState;
            return {
              comments: [newComment.comment, ...comments]
            };
          },
          () => this.props.updateCommentCount(1)
        );
      });
  };

  render() {
    const { comments } = this.state;
    return (
      <div>
        <AddComment addNewComment={this.addNewComment} />
        {comments.map((comment, i) => {
          return (
            <div key={comment.comment_id}>
              <h4>{`Author: ${comment.author}`}</h4>
              <p>{`Comment ID: ${comment.comment_id}`}</p>
              <p>{`${comment.body}`}</p>
              <p>{`Created at: ${new Date(comment.created_at)}`}</p>
              <Voter votes={comment.votes} comment_id={comment.comment_id} />
              <br />
              <button onClick={() => this.deleteComment(comment.comment_id)}>
                Delete Comment
              </button>
            </div>
          );
        })}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      this.setState({
        comments: this.state.comments,
        isLoading: false
      });
    }
  }

  componentDidMount() {
    api
      .fetchComments(this.props.article_id)
      .then(({ comments }) => {
        this.setState({ comments: comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: err, isLoading: false });
      });
  }
}

export default Comments;

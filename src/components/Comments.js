import React, { Component } from "react";
import * as api from "../api";
import Voter from "./Voter";
import AddComment from "./AddComment";
import moment from "moment";

class Comments extends Component {
  state = {
    comments: [],
    isLoading: true
  };

  deleteComment = comment_id => {
    api.removeComment(comment_id).then(() => {
      this.setState(prevState => {
        const updatedComments = prevState.comments.filter(
          comment => comment.comment_id !== comment_id
        );
        return {
          comments: updatedComments
        };
      });
    });
  };

  addNewComment = newComment => {
    api
      .fetchAddedComment(this.props.article_id, newComment)
      .then(newComment => {
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
        <AddComment
          addNewComment={this.addNewComment}
          username={this.props.username}
        />
        <br />
        <br />
        <a className="ui blue ribbon label">Comments</a>
        <br />
        <br />
        {comments.map((comment, i) => {
          return (
            <div key={comment.comment_id}>
              <h4>{`Author: ${comment.author}`}</h4>
              <p>{`Comment ID: ${comment.comment_id}`}</p>
              <p>{`${comment.body}`}</p>
              <p>{`Created at: ${moment(comment.created_at).format(
                "LLLL"
              )}`}</p>
              <Voter
                votes={comment.votes}
                comment_id={comment.comment_id}
                deleteComment={this.deleteComment}
                updateCommentCount={this.props.updateCommentCount}
              />
              <br />
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

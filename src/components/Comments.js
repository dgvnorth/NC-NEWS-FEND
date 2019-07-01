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
    const { article_id, updateCommentCount } = this.props;
    api.postComment(article_id, newComment).then(newComment => {
      this.setState(
        prevState => {
          const { comments } = prevState;
          return {
            comments: [newComment.comment, ...comments]
          };
        },
        () => updateCommentCount(1)
      );
    });
  };

  render() {
    const { comments } = this.state;
    const { username, updateCommentCount } = this.props;
    return (
      <div>
        <AddComment addNewComment={this.addNewComment} username={username} />
        <br />
        <br />
        <button className="ui blue ribbon label">Comments</button>
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
                updateCommentCount={updateCommentCount}
              />
              <br />
            </div>
          );
        })}
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { comments } = this.state;
    if (prevState.comments.length !== comments.length) {
      this.setState({
        comments: comments,
        isLoading: false
      });
    }
  }

  componentDidMount() {
    const { article_id } = this.props;
    api
      .fetchComments(article_id)
      .then(({ comments }) => {
        this.setState({ comments: comments, isLoading: false });
      })
      .catch(err => {
        this.setState({ error: err, isLoading: false });
      });
  }
}

export default Comments;

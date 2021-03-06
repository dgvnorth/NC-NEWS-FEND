import React, { Component } from "react";
import * as api from "../api";

class ArticleVoter extends Component {
  state = {
    voteChange: 0
  };

  handleVote = increment => {
    const { article_id, comment_id } = this.props;
    if (this.props.article_id) {
      api.patchArticleVotes(article_id, increment).catch(err => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      });
    } else {
      api.patchCommentVotes(comment_id, increment).catch(err => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increment
        }));
      });
    }
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + increment
    }));
  };

  render() {
    const { voteChange } = this.state;
    const { votes } = this.props;
    return (
      <div>
        <p>Votes: {votes + voteChange}</p>
        <div className="mini ui buttons">
          <button
            className="ui green button"
            onClick={() => this.handleVote(1)}
            disabled={voteChange > 0}
          >
            Up
          </button>
          <div className="or" />
          <button
            className="ui red button"
            onClick={() => this.handleVote(-1)}
            disabled={voteChange < 0}
          >
            Down
          </button>
        </div>
      </div>
    );
  }
}

export default ArticleVoter;

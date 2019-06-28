import React, { Component } from "react";
import * as api from "../api";

class Voter extends Component {
  state = {
    voteChange: 0
  };

  handleVote = increament => {
    const { article_id, comment_id } = this.props;
    if (this.props["article_id"]) {
      api.patchArticleVotes(article_id, increament).catch(err => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increament
        }));
      });
    } else {
      api.patchCommentVotes(comment_id, increament).catch(err => {
        this.setState(({ voteChange }) => ({
          voteChange: voteChange - increament
        }));
      });
    }
    this.setState(({ voteChange }) => ({
      voteChange: voteChange + increament
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
      // <div>
      //   <button onClick={() => this.handleVote(1)} disabled={voteChange > 0}>
      //     Vote Up
      //   </button>
      //   <p>Votes: {votes + voteChange}</p>
      //   <button onClick={() => this.handleVote(-1)} disabled={voteChange < 0}>
      //     Vote Down
      //   </button>
      // </div>
    );
  }
}

export default Voter;

import React, { Component } from "react";
import { PullRequestManager } from "../managers/PullRequestManager";
import { GithubUserEvent } from "../models/GithubUserEvent";
import { PullRequestPayload } from "../models/PullRequestPayload";

class ParticipantProgressBar extends Component<
  { username: string },
  { prs: GithubUserEvent<PullRequestPayload>[] }
> {
  private participantMgr: PullRequestManager;
  constructor(props: { username: string }) {
    super(props);
    this.participantMgr = new PullRequestManager();
    this.state = { prs: [] };
  }

  componentDidMount() {
    this.participantMgr
      .list(this.props.username)
      .then(prs => this.setState({ prs }));
  }

  private _getLabel() {
    let prs = this.state.prs.length;
    let base = prs >= 4 ? "Done!" : `${prs} / 4`;

    if (prs === 2) base += " halfway there!";
    if (prs === 3) base += " almost!";

    return base;
  }

  render() {
    return (
      <div className="progress mt-1">
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: `${(this.state.prs.length > 4 ? 4 : this.state.prs.length) /
              0.04}%`
          }}
          aria-valuenow={this.state.prs.length}
          // @ts-ignore
          aria-valuemin="0"
          // @ts-ignore
          aria-valuemax="4"
        >
          {this._getLabel()}
        </div>
      </div>
    );
  }
}

export default ParticipantProgressBar;

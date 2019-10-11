import React, { Component } from "react";
import { PullRequestManager } from "../managers/PullRequestManager";
import { GithubUserEvent } from "../../server/models/GithubUserEvent";
import { PullRequestPayload } from "../../server/models/PullRequestPayload";

class ParticipantSummary extends Component<
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

  render() {
    return <p>{this.state.prs.length}/4 Pull Requests</p>;
  }
}

export default ParticipantSummary;

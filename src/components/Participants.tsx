import React, { Component } from "react";
import { ParticipantManager } from "../managers/ParticipantManager";
import ParticipantSummary from "./ParticipantSummary";
import { ParticipantInfo } from "../models/ParticipantInfo";

interface ParticipantsState {
  participants: Array<ParticipantInfo>;
}

class Participants extends Component<{}, ParticipantsState> {
  private participantMgr: ParticipantManager;
  constructor(props: {}) {
    super(props);
    this.participantMgr = new ParticipantManager();
    this.state = { participants: [] };
  }
  componentDidMount() {
    this.participantMgr
      .list()
      .then(participants => this.setState({ participants }));
  }
  render = () =>
    this.state.participants.length ? (
      this.state.participants.map(({ name, github, twitter }) => (
        <div>
          {name} {github} @{twitter}
          <ParticipantSummary username={github} />
        </div>
      ))
    ) : (
        <div />
      );
}

export default Participants;

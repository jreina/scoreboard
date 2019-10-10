import React, { Component } from "react";
import { ParticipantManager } from "../managers/ParticipantManager";
import { ParticipantInfo } from "../models/ParticipantInfo";
import ParticipantTable from "./ParticipantTable";

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
      <ParticipantTable participants={this.state.participants} />
    ) : (
      <div />
    );
}

export default Participants;

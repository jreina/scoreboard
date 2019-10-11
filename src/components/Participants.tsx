import React, { Component } from "react";
import ParticipantTable from "./ParticipantTable";
import { AppManager } from "../managers/AppManager";
import { ParticipantSummary } from "../../server/models/ParticipantSummary";

interface ParticipantsState {
  participants: Array<ParticipantSummary>;
}

class Participants extends Component<{}, ParticipantsState> {
  constructor(props: {}) {
    super(props);
    this.state = { participants: [] };
  }
  componentDidMount() {
    AppManager.participants.subscribe(participants => this.setState({ participants }))
  }
  render = () =>
    this.state.participants.length ? (
      <ParticipantTable participants={this.state.participants} />
    ) : (
      <div />
    );
}

export default Participants;

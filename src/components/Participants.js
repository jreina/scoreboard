import React, { Component } from "react";
import { ParticipantManager } from "../managers/ParticipantManager";
import ParticipantSummary from "./ParticipantSummary";

class Participants extends Component {
  constructor(props) {
    super(props);
    this.participantMgr = new ParticipantManager();
    this.state = { participants: null };
  }
  componentDidMount() {
    this.participantMgr
      .list()
      .then(participants => this.setState({ participants }));
  }
  render = () =>
    this.state.participants ? (
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

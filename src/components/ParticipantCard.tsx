import React from "react";
import { ParticipantInfo } from "../models/ParticipantInfo";
import GithubLink from "./GithubLink";
import TwitterLink from "./TwitterLink";
import ParticipantSummary from "./ParticipantSummary";

const ParticipantCard = ({
  participant: { name, github, twitter }
}: {
  participant: ParticipantInfo;
}) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <div className="card-text">
        <ParticipantSummary username={github} />
        <GithubLink {...{ name, github }} />{" "}
        <TwitterLink {...{ name, twitter }} />
      </div>
    </div>
  </div>
);

export default ParticipantCard;

import React, { Component } from "react";
import { ParticipantInfo } from "../../server/models/ParticipantInfo";
import GithubLink from "./GithubLink";
import TwitterLink from "./TwitterLink";

const ParticipantList = ({
  participants
}: {
  participants: Array<ParticipantInfo>;
}) => (
  <ul className="list-group">
    {participants.map(({ name, twitter, github }) => (
      <li className="list-group-item">
        {name} <GithubLink {...{ name, github }} />{" "}
        <TwitterLink {...{ name, twitter }} />
      </li>
    ))}
  </ul>
);

export default ParticipantList;

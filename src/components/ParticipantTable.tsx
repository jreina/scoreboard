import React from "react";
import { ParticipantInfo } from "../models/ParticipantInfo";
import GithubLink from "./GithubLink";
import TwitterLink from "./TwitterLink";
import ParticipantProgressBar from "./ParticipantProgressBar";

const ParticipantTable = ({
  participants
}: {
  participants: Array<ParticipantInfo>;
}) => (
  <table className="table table-sm table-hover">
    <thead>
      <tr>
        <th scope="col">Links</th>
        <th scope="col">Name</th>
        <th scope="col">Progress</th>
      </tr>
    </thead>
    <tbody>
      {participants.map(({ github, name, twitter }, idx) => (
        <tr key={idx}>
          <td>
            <GithubLink {...{ github, name }} />{" "}
            <TwitterLink {...{ twitter, name }} />
          </td>
          <td>{name}</td>
          <td>
            <ParticipantProgressBar username={github} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ParticipantTable;

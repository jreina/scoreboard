import React from "react";
import GithubLink from "./GithubLink";
import TwitterLink from "./TwitterLink";
import ParticipantProgressBar from "./ParticipantProgressBar";
import { ParticipantSummary } from "../../server/models/ParticipantSummary";

const ParticipantTable = ({
  participants
}: {
  participants: Array<ParticipantSummary>;
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
      {participants.map(({ github, name, twitter, prs }, idx) => (
        <tr key={idx}>
          <td>
            <GithubLink {...{ github, name }} />{" "}
            <TwitterLink {...{ twitter, name }} />
          </td>
          <td>{name}</td>
          <td>
            <ParticipantProgressBar prs={prs} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ParticipantTable;

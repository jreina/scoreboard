import React from "react";
import { GithubUserEvent } from "../../server/models/GithubUserEvent";
import { PullRequestPayload } from "../../server/models/PullRequestPayload";

const _getLabel = (prs: number) => {
  let base = prs >= 4 ? "Done!" : `${prs} / 4`;

  if (prs === 2) base += " halfway there!";
  if (prs === 3) base += " almost!";

  return base;
};

const ParticipantProgressBar = ({
  prs
}: {
  prs: GithubUserEvent<PullRequestPayload>[];
}) => {
  return (
    <div className="progress mt-1">
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: `${(prs.length > 4 ? 4 : prs.length) / 0.04}%`
        }}
        aria-valuenow={prs.length}
        // @ts-ignore
        aria-valuemin="0"
        // @ts-ignore
        aria-valuemax="4"
      >
        {_getLabel(prs.length)}
      </div>
    </div>
  );
};

export default ParticipantProgressBar;

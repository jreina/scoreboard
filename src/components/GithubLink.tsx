import React from "react";

const GithubLink = ({ github, name }: { github: string; name: string }) => (
  <a
    href={`https://github.com/${github}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="GitHub-Mark-Light-32px.png"
      alt={`Github icon for ${name}`}
      height="24px"
    />
  </a>
);

export default GithubLink;

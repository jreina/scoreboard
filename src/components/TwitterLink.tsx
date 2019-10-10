import React from "react";

const TwitterLink = ({ twitter, name }: { twitter: string; name: string }) =>
  twitter && name ? (
    <a
      href={`https://twitter.com/${twitter}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="Twitter_Social_Icon_Circle_White.png"
        alt={`Twitter icon for ${name}`}
        height="24px"
      />
    </a>
  ) : null;

export default TwitterLink;

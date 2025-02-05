import React from "react";
import Links from "./Links"; // Import Links component

function About({ bio, links }) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {/* Conditionally render bio only if it exists */}
      {bio && <p>{bio}</p>}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />

      {/* Render Links component and pass down GitHub & LinkedIn */}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;

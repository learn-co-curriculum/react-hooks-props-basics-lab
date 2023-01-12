import React from "react";
import Links from "./Links";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      { <p>`${props.bio}`?  `${props.bio}` : null</p>} 
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin={props.linkedin} github={props.github} />
      
      
    </div>
  );
}

export default About;

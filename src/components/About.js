// import React from "react";
import Links from "./Links";

function About({bio, color}) {

  console.log(bio)

  return (
    <div id="about">
      <h2 style={{color}}>About Me</h2>
      <p style={{color}}>{bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links color={color} />      
    </div>
  );
}

export default About;

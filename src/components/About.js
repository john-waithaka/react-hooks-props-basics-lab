import React from "react";

//Warui import links into About
import Links from "./Links"


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
    
      {/* It checks if the props.bio exists and has a length greater than 1. 
      If both conditions are true, it renders a paragraph (<p>) containing the props.bio content. Otherwise, it renders nothing (null). */}

      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}

      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}

      <Links github={props.links.github} linkedin={props.links.linkedin} />

    </div>
  );
}



export default About;





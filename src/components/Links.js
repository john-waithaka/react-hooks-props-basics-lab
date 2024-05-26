import React from "react";


function Links(props) {
  return (

        // Write and include props with href
         <div>
            <h3>Links</h3>
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
        </div>

    );
 
}

export default Links;




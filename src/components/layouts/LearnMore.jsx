import React from "react";

let LearnMore = (props) => {
   return (
      <>
         <a className={`relative pr-8 group ${props.borderColor}`} href={props.link} target="_blank" rel="noopener noreferrer">
            <span className={`border-b-2 font-semibold border-solid border-transparent ${props.border}`}>{props.buttonText}</span>
            <span className="pl-2 absolute transition-all duration-200 group-hover:pl-3">&gt;</span>
         </a>
      </>
   )
}

export default LearnMore;
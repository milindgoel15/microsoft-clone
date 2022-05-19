import React from "react";

let SubNav = (props) => {
   return (
      <li key={props.id} className="py-4 md:text-xs border-b border-solid border-b-borderGray md:border-0 ">
         <a className="pl-14 md:px-0 md:border-b md:border-black md:border-solid md:border-transparent md:hover:border-current" href={props.link} target="_blank" rel="noopener noreferrer">
            {props.subTitle}
         </a>
      </li>
   )
}

export default SubNav;
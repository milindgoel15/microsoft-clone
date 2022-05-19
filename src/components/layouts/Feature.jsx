import React from "react";

let Feature = (props) => {
   return (
      <>
         <a key={props.id} className="flex cursor-pointer py-2 md:py-0 px-5 md:flex-col gap-6 md:gap-0 md:justify-center items-center group" href={props.link} target="_blank" rel="noopener noreferrer">

            <img className="h-10 w-10" src={props.icon} alt={props.alt} />
            <p className="py-3 font-semibold md:w-32 md:whitespace-normal text-center"><span className=" border-b-2 border-solid border-transparent group-hover:border-black"> {props.title} </span></p>

         </a>
      </>
   )
}

export default Feature;
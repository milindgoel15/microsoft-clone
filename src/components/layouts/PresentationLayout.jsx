import React from "react";
import LearnMore from "./LearnMore";
import NewButton from "./New";

let PresentationLayout = (props) => {
   return (
      <>
         <div>
            <img className="w-full" src={props.image} alt={props.alt} />
            <div className="py-4">
               <NewButton display={props.display} />
               <h1 className="text-xl font-semibold"> {props.title} </h1>
               <p> {props.desc} </p>
               <LearnMore
                  link={props.link}
                  borderColor="text-blue-700"
                  border="group-hover:border-blue-700"
                  buttonText={props.buttonText}
               />
            </div>
         </div>
      </>
   )
}

export default PresentationLayout;
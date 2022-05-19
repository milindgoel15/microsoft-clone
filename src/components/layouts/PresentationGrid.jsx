import React from "react";

let PresentationGrid = (props) => {
   return (
      <>
         <section key={props.id} className="grid sm:grid-cols-2 py-10  lg:grid-cols-4 mx-4 md:mx-8 lg:mx-14 xl:mx-24 sm:gap-2 md:gap-5 lg:gap-10">
            {props.content}
         </section>
      </>
   )
}

export default PresentationGrid;
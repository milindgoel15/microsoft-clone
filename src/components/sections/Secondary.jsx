import React from "react";
import SecondaryData from "../../utils/SecondaryData";
import PresentationGrid from "../layouts/PresentationGrid";
import PresentationLayout from "../layouts/PresentationLayout";

let Secondary = () => {
   return (
      <>
         <h1 className="text-2xl mt-14 font-semibold mx-4 md:mx-8 lg:mx-14 xl:mx-24">For business</h1>
         <PresentationGrid
            key='2'
            content={
               SecondaryData.map(props => (
                  <PresentationLayout
                     key={props.id}
                     title={props.title}
                     desc={props.desc}
                     image={props.image}
                     display={props.display}
                     link={props.link}
                     alt={props.alt}
                     buttonText={props.buttonText}
                  />
               ))
            }
         />
      </>
   )
}

export default Secondary;
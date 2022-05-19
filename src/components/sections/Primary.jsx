import React from "react";
import PrimaryData from "../../utils/PrimaryData";
import PresentationGrid from "../layouts/PresentationGrid";
import PresentationLayout from "../layouts/PresentationLayout";

let Primary = () => {
   return (
      <>
         <PresentationGrid
            key='1'
            content={
               PrimaryData.map(props => (
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

export default Primary;
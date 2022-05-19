import React from "react";
import FeatureData from "../../utils/FeatureData";
import Feature from "../layouts/Feature";

let Features = () => {
   return (
      <>
         <section className="flex flex-col md:flex-row pt-20 pb-10 mx-5 sm:mx-16 justify-center md:items-start">
            {
               FeatureData.map(props => (
                  <Feature 
                     key={props.id}
                     title={props.title}
                     icon={props.icon}
                     alt={props.alt}
                     link={props.link}
                  />
               ))
            }
         </section>
      </>
   )
}

export default Features;
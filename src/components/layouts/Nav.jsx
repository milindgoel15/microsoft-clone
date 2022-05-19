import React, { useState, useEffect } from "react";
import SubNav from "./SubNav";

let Nav = (props) => {
   let [isSubMenuOpen, setSubMenuOpen] = useState(false);
   let [isDesktopMode, setDesktopMode] = useState(window.innerWidth > 768);

   let updateComp = () => {
      setDesktopMode(window.innerWidth > 768)
   }
   useEffect(() => {
      window.addEventListener("resize", updateComp);
      return () => window.removeEventListener("resize", updateComp);
   });

   let component = (
      <ul className="pt-3">
         {
            props.links.map(props => (
               <SubNav
                  key={props.id}
                  subTitle={props.subTitle}
                  link={props.link}
               />
            ))
         }
      </ul>
   )

   return (
      <li className="py-4 select-none outline-none border-b border-solid border-b-borderGray md:border-0 ">
         <div key={props.id} onClick={() => setSubMenuOpen(!isSubMenuOpen)} className="px-5 md:px-0 flex items-center flex-row justify-between">
            <span className="md:font-semibold md:text-sm "> {props.title} </span>
            <img className={`h-3 md:hidden ${isSubMenuOpen ? "rotate-180" : ""} `} src={props.icon} alt="Expand" />
         </div>
         {isDesktopMode ? (component) : (isSubMenuOpen && (component))}
      </li>
   )
}

export default Nav;
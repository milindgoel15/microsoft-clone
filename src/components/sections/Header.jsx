import React, { useState } from "react";
import msLogo from "../../assets/microsoft.svg";
import search from "../../assets/nav/search.svg";
import cart from "../../assets/nav/cart.svg";
import user from "../../assets/nav/user.svg";
import downArrow from "../../assets/nav/down-chevron.svg";
import navDeskLinks from "../../utils/navDeskLinks";
import Nav from "../layouts/Nav";

import Ham from "../elements/Ham";
import Cross from "../elements/Cross";
import navMobileLinks from "../../utils/navMobileLinks";



let Header = () => {

   let [isOpen, setOpen] = useState(false);
   let [isExpanded, setExpanded] = useState(false);

   return (
      <>

         <header className="flex flex-row items-center justify-between py-2 md:py-1 px-4 lg:px-8 xl:px-14 2xl:px-24">
            <div onClick={() => setOpen(!isOpen)} className="flex md:hidden items-center gap-4">
               <button>
                  {isOpen ? <Cross /> : <Ham />}
               </button>
               <img className="h-4 rotate-90 " src={search} alt="search icon" />
            </div>


            <div className="flex items-center flex-row md:gap-5 xl:gap-8">
               <img className="h-6" src={msLogo} alt="msLogo" />


               <ul className={`md:flex md:text-normal items-center top-[46px] gap-4 bg-gray z-10 md:z-auto md:static absolute w-full left-0 md:w-auto md:bg-transparent md:opacity-100 ${isOpen ? "block" : "hidden"}`}>
                  {
                     navDeskLinks.map(props => (
                        <li key={props.id} className="py-4 border-b border-solid border-b-borderGray md:border-0 ">
                           <a className="px-5 md:px-0 md:border-black md:hover:border-b-[3px] md:border-solid " href={props.link} target="_blank" rel="noopener noreferrer">
                              {props.title}
                           </a>
                        </li>
                     ))
                  }
                  <ul className="md:hidden">
                     {
                        navMobileLinks.map(props => (
                           <Nav
                              key={props.id}
                              title={props.title}
                              icon={props.icon}
                              links={props.links}
                           />
                        ))
                     }

                     <li className="py-4 border-b border-solid border-b-borderGray md:border-0 ">
                        <a className="px-5 md:px-0" href="https://www.microsoft.com/en-in/sitemap.aspx" target="_blank" rel="noopener noreferrer">
                           View Sitemap
                        </a>
                     </li>
                  </ul>
               </ul>
            </div>

            <div className="flex text-normal md:gap-2 xl:gap-5">
               <div onClick={() => setExpanded(!isExpanded)} className={`${isExpanded ? "bg-gray" : ""} px-2 py-4 gap-2 items-center hidden md:flex md:flex-row`}>
                  <button className=" border-b-2 border-solid border-transparent hover:border-black"> All Microsoft </button>
                  <img className={`h-2 ${isExpanded ? "rotate-180" : ""} `} src={downArrow} alt="All Microsoft links" />
               </div>
               <div className="hidden px-1 md:flex gap-2 items-center cursor-pointer ">
                  <span className="md:hidden xl:block border-b-2 border-solid border-transparent hover:border-black">
                     Search
                  </span>
                  <img className="h-4 rotate-90 " src={search} alt="search icon" />
               </div>
               <a href="https://www.microsoft.com/en-in/store/buy" target="_blank" rel="noopener noreferrer" className="flex px-1 gap-2 items-center cursor-pointer ">
                  <span className="hidden xl:block border-b-2 border-solid border-transparent hover:border-black">
                     Cart
                  </span>
                  <img className="h-5 " src={cart} alt="Cart" />
               </a>
               <div className="flex px-1 gap-2 items-center cursor-pointer ">
                  <span className="hidden xl:block border-b-2 border-solid border-transparent hover:border-black">
                     Sign In
                  </span>
                  <img className="h-8" src={user} alt="user icon" />
               </div>
            </div>
         </header>

         {isExpanded && (
            <section className="relative md:mx-8 xl:mx-40">
               <div className="hidden absolute w-full md:flex md:flex-col mt-1 border border-borderGray bg-gray z-10">
                  <ul className={`grid md:grid-cols-3 lg:grid-cols-6 mx-10 mt-2 md:gap-2 xl:gap-5 px-5 `}>
                     {
                        navMobileLinks.map(props => (
                           <Nav
                              key={props.id}
                              title={props.title}
                              icon={props.icon}
                              links={props.links}
                           />
                        ))
                     }


                  </ul>


                  <p className="py-3 bg-borderGray text-normal group text-center border-b-2 border-solid border-b-black ">
                     <a className=" no-underline relative hover:underline" href="https://www.microsoft.com/en-in/sitemap.aspx" target="_blank" rel="noopener noreferrer">
                        VIEW SITEMAP
                     </a>
                     <span className="pl-1 transition-all absolute duration-200 group-hover:pl-2">&gt;</span>
                  </p>
               </div>
            </section>
         )}
      </>
   )
}

export default Header;



import React from "react";
import FooterData from "../../utils/FooterData";
import web from "../../assets/web.svg";

let Footer = () => {
   return (
      <footer className="bg-gray pt-12">
         <ul className="grid sm:grid-cols-2 py-2 md:grid-cols-3 xl:grid-cols-6 mx-6 md:mx-20 xl:mx-32 gap-6">
            {
               FooterData.map(props => (
                  <li key={props.id}>
                     <h2 className="font-semibold text-gray-500 pb-1 text-sm"> {props.head} </h2>
                     <li> {props.content.map(props => (
                        <li key={props.id} className="py-2 text-small">
                           <a className="md:border-b md:border-solid md:border-transparent md:hover:border-black" href={props.link} target="_blank" rel="noopener noreferrer">
                              {props.title}
                           </a>
                        </li>
                     ))}
                     </li>
                  </li>
               ))
            }
         </ul>
         <div className="flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-center py-6 mx-6 md:mx-20 xl:mx-32  ">
            <div className="flex items-center gap-2 group cursor-pointer">
               <img src={web} alt="web icon" />
               <p className="text-small no-underline group-hover:underline ">English (India)</p>
            </div>
            <ul className="flex flex-wrap gap-4">
               <li className="text-small cursor-pointer no-underline hover:underline">Contact Microsoft</li>
               <li className="text-small cursor-pointer no-underline hover:underline">Privacy</li>
               <li className="text-small cursor-pointer no-underline hover:underline">Terms of use</li>
               <li className="text-small cursor-pointer no-underline hover:underline">Trademarks</li>
               <li className="text-small cursor-pointer no-underline hover:underline">About our ads</li>
               <li className="text-small cursor-pointer no-underline hover:underline">© Microsoft 2022</li>
            </ul>
         </div>
         <div className="flex flex-col text-sm gap-3 justify-center text-center py-6 mx-6 ">

            <p>Disclaimer: This project is just for learning purposes. All the credit goes to the <a className="text-black font-semibold  no-underline hover:underline" href="https://microsoft.com" target="_blank" rel="noopener noreferrer">Microsoft Team</a>.
               <br />
               This project is made possible using <a className="font-semibold no-underline hover:underline" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a> and <a className="font-semibold no-underline hover:underline" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">TailwindCSS</a> with further styling improvements.
            </p>
            <p className="text-md py-2 duration-300 ease-in">Made with<span className="cursor-default"> ❤ </span> by <a rel="noreferrer" href="https://github.com/milindgoel15" target="_blank" className="font-semibold no-underline hover:underline">Milind Goel</a>.
            </p>
         </div>
      </footer>
   )
}

export default Footer;
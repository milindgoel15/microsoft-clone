import React from "react";

let NewButton = (props) => {
   return (
      <>
         <p className={`bg-yellow-500 w-fit font-semibold py-1 px-4 ${props.display} `}>New</p>
      </>
   )
}

export default NewButton;
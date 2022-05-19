import React from "react";
import mobile from "../../assets/edge/mobile.webp";
import desktop2 from "../../assets/edge/desktop2.jpg";
import LearnMore from "../layouts/LearnMore";

let Edge = () => {
   return (
      <>
         <section className="md:py-32 md:flex md:justify-center md:items-center relative">
            <img className="hidden absolute md:w-full lg:w-[90%] xl:w-[85%] 2xl:lg:w-[87%] h-[30rem] 2xl:h-[32rem] -z-10 md:block" src={desktop2} alt="Microsoft Edge" />
            <img className="w-full md:hidden" src={mobile} alt="Microsoft Edge" />
            <div className="bg-borderGray md:bg-transparent flex flex-col gap-3 md:gap-0 items-center text-center justify-center py-[4.5rem] md:pt-0 md:pb-40 ">
               <h1 className="text-xl lg:text-3xl font-semibold"> Microsoft Edge </h1>
               <p className="px-10 sm:px-20 md:py-4 md:px-0">World-class performance with more privacy, more productivity and more value while you browse</p>
               <LearnMore link="https://www.microsoft.com/en-us/edge" border="group-hover:border-white" borderColor="bg-black text-white px-4 py-2" buttonText="Learn more" />
            </div>
         </section>
      </>
   )
}

export default Edge;
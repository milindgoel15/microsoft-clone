import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import DesktopImageOne from "../../assets/carousel/1.webp";
import DesktopImageTwo from "../../assets/carousel/2.webp";
import MobileImageOne from "../../assets/carousel/mobile365.webp";
import MobileImageTwo from "../../assets/carousel/mobilesurface.webp";

import LearnMore from "../layouts/LearnMore";
import NewButton from "../layouts/New";

let Hero = () => {
   return (
      <>
         <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
               delay: 3000,
               disableOnInteraction: false,
            }}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper md:h-[30rem] lg:h-[32rem]"
         >
            <SwiperSlide className="md:flex md:justify-center md:items-center md:-mt-5">
               <img className="hidden absolute md:w-full lg:w-[85%] -z-10 md:block" src={DesktopImageOne} alt="Surface Pro 8" />
               <img className="w-full md:hidden" src={MobileImageOne} alt="Surface Pro 8" />
               <div className="bg-borderGray md:bg-transparent flex flex-col gap-3 md:gap-0 items-center md:items-start justify-center py-[4.5rem] md:pt-0 md:pb-32 text-center md:-ml-64 md:w-[58%] lg:w-[46%] lg:-ml-60 xl:-ml-96 xl:w-[44%] 2xl:-ml-[44rem] 2xl:w-[30%] md:text-left">
                  <NewButton />
                  <h1 className="text-xl lg:text-3xl font-semibold"> Surface Pro 8 </h1>
                  <p className="px-6 md:py-4 md:px-0">Do more with a larger 13-inch touchscreen, faster connections and extra speed. Now available with Windows 11.</p>
                  <LearnMore link="https://www.microsoft.com/en-in/surface/devices/surface-pro-8?icid=mscom_marcom_H1a_SurfacePro8" border="group-hover:border-white" borderColor="bg-black text-white px-4 py-2" buttonText="Learn more" />
               </div>
            </SwiperSlide>
            <SwiperSlide className="md:flex md:justify-center md:items-center md:-mt-5">
               <img className="hidden absolute md:w-full lg:w-[85%] -z-10 md:block" src={DesktopImageTwo} alt="Microsoft 365" />
               <img className="w-full md:hidden" src={MobileImageTwo} alt="Microsoft 365" />
               <div className="bg-borderGray md:bg-transparent flex flex-col gap-3 md:gap-0 items-center md:items-start justify-center py-20 text-center md:-ml-64 md:w-[58%] lg:w-[38%] lg:-ml-96 xl:-ml-96 xl:w-[44%] 2xl:-ml-[44rem] 2xl:w-[30%] md:text-left">
                  <h1 className="text-xl lg:text-3xl font-semibold">Microsoft 365</h1>
                  <p className="px-6 md:py-4 md:px-0">Premium Office apps, extra cloud storage, advanced security, and more - all in one convenient subscription</p>
                  <div className="flex flex-col items-center gap-4 sm:flex-row">
                     <LearnMore link="https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-family/cfq7ttc0k5dm?icid=mscom_marcom_M365Family" border="group-hover:border-white" borderColor="bg-black text-white px-4 py-2" buttonText="For up to 6 people" />
                     <LearnMore link="https://www.microsoft.com/en-in/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf?icid=mscom_marcom_M365Personal" border="group-hover:border-black" borderColor="text-black py-2" buttonText="For 1 person" />
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   )
}

export default Hero;
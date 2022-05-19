import DesktopImageOne from "../assets/carousel/1.webp";
import DesktopImageTwo from "../assets/carousel/2.webp";
import MobileImageOne from "../assets/carousel/mobile365.webp";
import MobileImageTwo from "../assets/carousel/mobilesurface.webp";

let carouselData = [
   {
      id: 1,
      title: 'Surface Pro 8',
      desc: 'Do more with a larger 13-inch touchscreen, faster connections and extra speed. Now available with Windows 11.',
      link: 'https://www.microsoft.com/en-in/surface/devices/surface-pro-8?icid=mscom_marcom_H1a_SurfacePro8',
      desktopImage: DesktopImageOne,
      mobileImage: MobileImageOne,
      alt: 'Image for Surface Pro 8',
      moreInfo: 'Learn More'
   },
   {
      id: 2,
      title: 'Microsoft 365',
      desc: 'Premium Office apps, extra cloud storage, advanced security, and more - all in one convenient subscription',
      link: 'https://www.microsoft.com/microsoft-365',
      desktopImage: DesktopImageTwo,
      mobileImage: MobileImageTwo,
      alt: 'Image for Microsoft 365',
      moreInfo: 'Learn More >'
   },
]

export default carouselData;
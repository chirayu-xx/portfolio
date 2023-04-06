import { ArrowUpIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      // clean up the event listener on unmount
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    return (
      <button
        onClick={scrollToTop}
        className={`${isVisible ? "block" : "hidden"} fixed bottom-4 right-4 p-3 rounded-full text-white`}
      >
        <ArrowUpIcon className='absolute block bottom-1 left-1 md:bottom-10 md:left-10 h-8 w-8 rounded-full  hover:text-[#F7AB0A] cursor-pointer'/>
      </button>
    );
  };
  
  export default ScrollTopButton;
import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaFacebookMessenger, FaFacebook } from "react-icons/fa";
import "@lottiefiles/lottie-player";
import animationIcon from "../../assets/lottiefiles/Animation - 1750765404910.json";
import SearchBar from "./SearchBar";
import { Link } from "react-router";

export default function TopNavbar() {
  return (
    <header
      className="z-50 bg-white"
    >
      {/* <div className="container  border-b border-gray-100 mx-auto px-4">
       

        <div
          className="
          flex justify-between items-center gap-2 sm:gap-4
          text-xs sm:text-base
          overflow-x-auto   
          whitespace-nowrap  
          py-2
        "
        >
         
          <div className="flex text-lg items-center gap-1 sm:gap-2 shrink-0">
           

            <lottie-player
              src={animationIcon}
              background="transparent"
              speed="0.5"
              style={{ width: "25px" }}
              loop
              autoplay
            />

            <a
              href="tel:01876258020"
              className="text-[var(--primaryColor)] hover:underline"
            >
              01876258020
            </a>
          </div>

         
          <div className="flex items-center gap-3 text-lg shrink-0">
            <a
              href="https://wa.me/1876258020"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366]"
            >
              <IoLogoWhatsapp />
            </a>
            <a
              href="https://m.me/ridwanulhoque231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00B2FF]"
            >
              <FaFacebookMessenger />
            </a>
            <a
              href="https://facebook.com/ridwanulhoque231"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1877F2]"
            >
              <FaFacebook />
            </a>
          </div>

          <div>
            <Link to={"/user-order"} className="text-[var(--primaryColor)]">
              My Order
            </Link>
          </div>
        </div>
      </div> */}

      {/* <Navbar></Navbar> */}
      <SearchBar></SearchBar>

      
    </header>
  );
}

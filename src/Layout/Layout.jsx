import React, { useEffect, useState } from "react";
import Navbar from "../Component/Common/Navbar";
import { Outlet } from "react-router";
import Footer from "../Component/Common/Footer";
import TopNavbar from "../Component/Common/TopNavbar";
import BottomNavbar from "../Component/Common/BottomNavbar";
import SearchBar from "../Component/Common/SearchBar";

export default function Layout() {

 


  return (
    <div className="relative min-h-screen">

      {/* ✅ Background Pattern (behind all content) */}

      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] "></div>

      </div>

      {/* ✅ Main Content Layer (on top of background) */}
      <div className="container m-auto px-3">
        {/* Top Navbar */}
        <TopNavbar />


        {/* Main Navbar */}
        <Navbar />
        {/* <SearchBar></SearchBar> */}

        {/* Outlet for nested routes */}
        <div className="lg:mt-0 ">
          <Outlet />
        </div>

        {/* Footer */}
        <Footer />

        {/* Fixed Bottom Navbar */}
        <div className="bottom-0 fixed w-full">
          <BottomNavbar />
        </div>
        
      </div>


    </div>
  );
}

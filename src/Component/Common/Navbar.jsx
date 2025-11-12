import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import Hamburger from "hamburger-react";
import { AnimatePresence, easeInOut, motion } from "framer-motion";

import { FaShoppingCart } from "react-icons/fa";
import { Btn } from "./Typography/Typography";
import { AuthContext } from "../../AuhtProvider/AuthProvider";
import toast from "react-hot-toast";
import useCart from "../../Hook/useCart";
import useAdmin from "../../Hook/useAdmin";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { isAdmin } = useAdmin();

   const [localCart, setCart] = useState([]);
  
    // ✅ Load cart items from localStorage on mount
  useEffect(() => {
      const storedCart = localStorage.getItem("cartItems");
      const parsed = storedCart ? JSON.parse(storedCart) : [];
      setCart(parsed);
    }, []);
  



  const handlerLogout = () => {
    logOut(null);
    toast.success("Successful Logout");
    console.log("success logout");
  };

  return (
    <header className=" lg:block py-2">
      <nav className="container  lg:bg-transparent rounded-t py-2 bg-[var(--primaryColor)] px-3 relative m-auto text-gray-900 lg:py-2 flex justify-between items-center">
        {/* Logo */}

        <div className="lg:text-2xl text-[23px] pe-2 font-bold font-script ">
          <Link to="/">
            <h2 className="lg:text-[var(--primaryColor)] text-[20px] text-white lg:text-3xl">
              Wellnest
            </h2>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-5">
          <ul className="hidden md:flex space-x-6 text-sm font-medium">
            <li>
              <NavLink to="/" className="">
                HOME
              </NavLink>
            </li>

            <li>
              <NavLink to="/all-product">ALL PRODUCT</NavLink>
            </li>
          </ul>

          <div className="lg:space-x-2 space-x-1">
            {isAdmin ? (
              <>
                {" "}
                <Link
                  to={"/dashboard"}
                  className="text-white text-base lg:text-black border-1 border-gray-500 py-1 px-3  rounded-full"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  to={"/user-order"}
                  className="text-white text-base lg:text-black border-1 border-gray-500 py-1 px-3  rounded-full"
                >
                  Dashboard
                </Link>
              </>
            )}

          </div>

          <Link to={"/cart"} className="relative  me-2 inline-block">
            {/* Shopping Cart Icon */}
            <FaShoppingCart className="lg:text-black text-white text-xl" />
            {/* Notification Badge */}
            <button className="absolute -top-3 -right-4 bg-purple-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {localCart.length}
            </button>
          </Link>

          <div className="hidden  space-x-3 lg:block">
            {user ? (
              <>
                <Link
                  className="cursor-pointer"
                  onClick={handlerLogout}
                  to={"/login"}
                >
                  <Btn btn={"Logout"}></Btn>
                </Link>
              </>
            ) : (
              <>
                <Link to={"/login"}>
                  <Btn btn={"Login"}></Btn>
                </Link>

                <Link to={"/register"}>
                  <Btn btn={"Register"}></Btn>
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: isOpen ? "0%" : "-100%" }}
              key="mobileMenu"
              transition={{ duration: 0.5, ease: "easeOut" }}
              exit={{ x: "-100%", opacity: 0 }}
              className={` h-screen left-0 px-3 w-68 top-16 shadow z-20  bg-slate-300 absolute`}
            >
              <div className="z-20">
                <ul className="flex ps-10 pt-10  flex-col space-x-6 lg:text-sm font-medium">
                  <li className=" py-1">
                    <NavLink to="/" onClick={() => setOpen(false)} className="">
                      HOME
                    </NavLink>
                  </li>

                  <li className=" py-1">
                    <NavLink
                      to="/all-product"
                      onClick={() => setOpen(false)}
                      className=""
                    >
                      ALL PRODUCT
                    </NavLink>
                  </li>

                  <li className=" py-1">
                    {user && (
                      <NavLink onClick={handlerLogout} to={"/login"}>
                        LOGOUT
                      </NavLink>
                    )}
                  </li>

                  <li className=" py-1">
                    {!user && (
                      <NavLink onClick={() => setOpen(false)} to={"/login"}>
                        LOGIN
                      </NavLink>
                    )}
                  </li>

                  <li className=" py-1">
                    {!user && (
                      <NavLink onClick={() => setOpen(false)} to={"/register"}>
                        REGISTER
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* hamburger */}
        <div className="lg:hidden lg:text-black text-white">
          <Hamburger size={30} toggled={isOpen} toggle={setOpen}></Hamburger>
        </div>
      </nav>
    </header>
  );
}

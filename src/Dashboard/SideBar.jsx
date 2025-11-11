import React, { useContext } from "react";
import {
  HiOutlineViewGrid,
  HiOutlineDocumentText,
  HiOutlineChatAlt,
} from "react-icons/hi";
import { Link, Outlet } from "react-router";
import toast from "react-hot-toast";
import { AuthContext } from "../AuhtProvider/AuthProvider";
import AdminHome from "./Admin/AdminHome";
import PublicRoute from "./PublicRoute";
import useAdmin from "../Hook/useAdmin";
import User_Order from "./User/User_Order";

export default function SideBar() {
  
  const { user, logOut } = useContext(AuthContext);

  const handlerLogout = () => {
    logOut(null);
    toast.success("Successfully Logout");
  };

  const { isAdmin } = useAdmin();

  return (
    <div className="h-screen flex flex-col">
      {/* ✅ Top Navbar */}
      <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <div className="lg:text-2xl text-[23px] pe-2 font-bold font-script">
          <Link to="/">
            <h2 className="lg:text-[var(--primaryColor)] text-[20px] text-[var(--primaryColor)] lg:text-3xl">
              Wellnest
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-5 text-gray-500">
          <p>Hi! {(!user && "There") || "Admin"}</p>
          <Link
            to="/login"
            onClick={handlerLogout}
            className="border cursor-pointer rounded-full text-sm px-4 py-1"
          >
            Login
          </Link>
        </div>
      </div>

      {/* ✅ Main layout area with sidebar and content */}

      {isAdmin && (
        <>
          {" "}
          <div className="flex flex-1">
            <div className="md:w-64 w-16 border-r border-gray-300 pt-4 text-base bg-white flex flex-col justify-between">
              
              <div> {isAdmin ? <AdminHome></AdminHome> : <User_Order></User_Order>} </div>

              <div className="mb-10">
                <PublicRoute />
              </div>
            </div>

            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
              <Outlet />
            </div>

          </div>
        </>
      )}
    </div>
  );
}

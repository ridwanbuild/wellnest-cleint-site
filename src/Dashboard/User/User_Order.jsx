import React, { useContext, useEffect } from 'react';
import User_Order_Details from './User_Order_Details';
import { AuthContext } from '../../AuhtProvider/AuthProvider';
import useAdmin from '../../Hook/useAdmin';
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';

export default function User_Order() {
  const { user, navigate } = useContext(AuthContext);
  const { isAdmin, adminLoading } = useAdmin();
 

  useEffect(() => {
    if (!adminLoading) {
      if (!user) {
        toast.error("⚠️ Please log in to view your orders.");
        navigate("/login");
      } else if (!isAdmin) {
        toast.error("🚫 Access denied. Only registered users can view this section.");
        navigate("/register");
      }
    }
  }, [user, isAdmin, adminLoading, navigate]);


  return (
    <div>
      <h2 className="text-xl font-semibold text-center my-4 text-green-600">
        🛍️ Welcome to Your Order Dashboard
      </h2>

      <User_Order_Details />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { FiArrowLeft, FiLogOut } from "react-icons/fi";
import { Link, useParams } from "react-router";
import useAxiosPublic from "../../Hook/useAxiosPublic";

export default function User_Order_Details() {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (!id) return;
    const fetchOrder = async () => {
      try {
        const res = await axiosPublic.get(`/order-confirm/${id}`);
        setUserData(res.data);
      } catch (err) {
        console.error("Fetch order error:", err);
      }
    };
    fetchOrder();
  }, [id, axiosPublic]);

  // Calculate total amount from orderItems
  const totalPrice = userData?.orderItems?.reduce(
    (sum, item) => sum + (item.total || 0),
    0
  );

  

  return (
    <div className="border rounded-md border-gray-300 p-4">
      {/* Back Button */}
      <Link
        to="/cart"
        className="inline-flex items-center text-blue-600 mb-4"
      >
        <FiArrowLeft className="mr-1" /> Back to Cart
      </Link>

      {/* Order Info */}
      <div className="rounded-lg p-4 shadow">
        <h2 className="text-xl font-semibold mb-3">Order Details</h2>

        {!userData ? (
          <p className="text-gray-500"> Please Selected Your Product </p>
        ) : (
          <>
            <ul className="divide-y">
              {userData.orderItems?.map((item, idx) => (
                <li key={idx} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{item.price} Tk</p>
                    <p className="text-sm text-gray-600">
                      Total: {item.total} Tk
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Total Price */}
            <div className="mt-4 border-t pt-3 text-right font-semibold text-lg">
              Total Price: {totalPrice ?? 0} Tk
            </div>
          </>
        )}
      </div>

      {/* Logout Button */}

      <button
        className="w-full mt-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
        type="button"
      >
        <FiLogOut className="inline-block mr-2" />
        Log Out
      </button>

    </div>


  );
}

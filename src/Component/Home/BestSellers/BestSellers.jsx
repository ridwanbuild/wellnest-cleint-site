import React from "react";
import useAddItem from "../../../Hook/useAddItem";
import Loading from "../../../Loading";
import Best_Sellers_Card from "./Best_Sellers_Card";
import { Btn, HeadingH2 } from "../../Common/Typography/Typography";
import { Link } from "react-router";

export default function BestSellers() {
  const { addItem, loading } = useAddItem();

  if (loading) {
    return <Loading />;
  }

  // Filter all items by category
  const homeDecor = addItem.filter((item) => item.category === "Home Decor");
  const electronics = addItem.filter((item) => item.category === "Electronics");
  const accessories = addItem.filter((item) => item.category === "Accessories");
  const books = addItem.filter((item) => item.category === "Books");
  const allProduct = [...homeDecor, ...electronics, ...accessories, ...books];
  
  const topTenProduct = allProduct.slice(0, 10);
  const isEmpty = topTenProduct.length === 0;


  return (

    <div className="lg:py-16 py-10">


      <div className="py-3">
        <HeadingH2 headingH2="Best Sellers" className="" />
      </div>

      {isEmpty ? (
        <div className=" text-gray-500 ">
          <p>No best-selling products found.</p>
        </div>
      ) : (
        <>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {topTenProduct.map((item) => (
              <Best_Sellers_Card key={item._id} card={item} />
            ))}
          </div>

          <div className="flex items-center justify-center mt-8">
            <Link to="/all-product">
              <Btn className="" btn="View All Products" />
            </Link>
          </div>

        </>
      )}
    </div>
  );
}

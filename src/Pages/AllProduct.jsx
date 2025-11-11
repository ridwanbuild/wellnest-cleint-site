import React from "react";
import useAddItem from "../Hook/useAddItem";
import Loading from "../Loading";
import Best_Sellers_Card from "../Component/Home/BestSellers/Best_Sellers_Card";
import { HeadingH2 } from "../Component/Common/Typography/Typography";

export default function AllProduct() {
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
  const isEmpty = allProduct.length === 0;

  return (
    <div className="lg:py-16 py-10 ">
      <div className="py-3">
        <HeadingH2 headingH2="All Product" className="" />
      </div>

      {isEmpty ? (
        <div className=" text-gray-500">
          <p>No products available right now.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {allProduct.map((item) => (
            <Best_Sellers_Card key={item._id} card={item} />
          ))}
        </div>
      )}
    </div>
  );
}

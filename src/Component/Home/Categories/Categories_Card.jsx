import React from "react";

export default function Categories_Card({ item }) {

  const { productName, category, images } = item;

 


  return (
    <div className="p-4 bg-white border border-gray-300  rounded">

      <div>
       <div className=" rounded  h-28 lg:h-52">
         <img
          className=" w-full h-full lg:h-52 object-cover rounded"
          src={images}
          alt={productName}
        />

       </div>
        <div className="py-2 ">
            <h1 className="lg:text-xl text-center text-gray-800 font-semibold">{category}</h1>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from "react";
import useAddItem from "../../Hook/useAddItem";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router";


export default function SearchBar() {
  const { addItem } = useAddItem(); // assuming addItem is an array of products
  const [search, setSearch] = useState("");

  const [isFocus, setFocus] = useState(false);

  // Filter products based on search input (case-insensitive)
 const filteredItems = addItem.filter(
    (item) =>
      typeof item.productName === "string" &&
      item.productName.toLowerCase().includes(search.toLowerCase())
  );
  
  console.log(isFocus);

  return (
    <div className="container  px-3 m-auto">
      <div className="flex rounded-full items-center mt-2 border pl-4 gap-2 bg-white border-gray-500/30 lg:h-[50px] h-[41px]  overflow-hidden w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="#6B7280"
        >
          <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8" />
        </svg>

        <input
          onBlur={() => setTimeout(() => setFocus(false), 200)}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setFocus(true)}
          type="text"
          className="w-full h-full outline-none text-sm text-gray-500"
          placeholder="Search your product"
        />

        <button
          type="submit"
          className="bg-[var(--primaryColor)] w-32 h-8 lg:h-9 rounded-full text-sm text-white mr-[5px]"
        >
          Search
        </button>
      </div>

      {/* Live Filtered Results */}

      {(isFocus || search) && (
        <div className="bg-white shadow-xl  h-62  py-5 rounded  p-1  overflow-y-auto">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (

              <Link to={`/all-product`} key={index} className="p-2 flex items-center justify-between border-b border-gray-300">
                {item.productName}
                <button><MdArrowOutward /></button>
              </Link>

            ))
          ) : (
            <div className="text-gray-400 text-center text-sm">
              No product found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}

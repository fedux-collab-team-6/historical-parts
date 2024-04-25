import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link className="" to={`/product/${item.id}`}>
      <div className="card w-72 bg-spindle-50 flex flex-col gap-2.5 p-8">
        <div className="image w-full h-[250px] overflow-hidden relative">
          {/* <span className=" absolute top-1.5 left-1.5 bg-white text-teal-900 py-1 px-1.5 z-[3] font-semibold text-sm">
            {item.attributes?.condition}
          </span> */}
          <img
            src={`${item.attributes?.vectorImg?.data?.attributes?.url}`}
            alt=""
            className="mainImg w-full h-full object-contain"
          />
        </div>
        <div>
          <h4 className=" font-bold"> {item.attributes?.era}</h4>
          {/* <p>({item.attributes?.styleDetails}.substring(1, 3))</p> */}
          <p className="price"> {item.attributes?.price} kr</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

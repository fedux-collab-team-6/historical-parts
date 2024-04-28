import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Link className="" to={`/product/${item.id}`}>
      <div className="card w-72 bg-spindle-50 flex flex-col gap-2.5 p-8 border-[1px] border-coral-400">
        <div className="image w-full h-[250px] overflow-hidden relative">
          <img
            src={`${item.attributes?.img?.data[0]?.attributes?.url}`}
            alt=""
            className="w-full h-full object-cover opacity-0 hover:opacity-100 absolute"
          />
          <img
            src={`${item.attributes?.vectorImg?.data?.attributes?.url}`}
            alt=""
            className="w-full h-full object-contain opacity-100 hover:opacity-0"
          />
        </div>
        <div className=" flex-1">
          <p className=" font-bold"> {item.attributes?.era}</p>
          <p className=" text-wrap text-sm">
            {item.attributes?.productDescription.substring(0, 50)}...
          </p>
        </div>
        <p className=" font-bold"> {item.attributes?.price} kr</p>
      </div>
    </Link>
  );
};

export default ProductCard;

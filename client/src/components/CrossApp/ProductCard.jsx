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
            className="mainImg w-full h-full object-contain opacity-0 hover:opacity-100 absolute z-10"
          />

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

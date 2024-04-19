import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  // console.log(item.img.data.attributes.url);
  return (
    <Link className="" to={`/product/${item.id}`}>
      <div className="card w-72 flex flex-col gap-2.5 mb-12">
        <div className="image w-full h-[400px] overflow-hidden relative">
          {/* {item.attributes.Contition === "Cood condition" ? (
            <span className=" absolute top-1.5 left-1.5 bg-white text-teal-900 py-1 px-1.5 z-[3] font-semibold text-sm">
              Has Frame
            </span>
          ) : null} */}
          <span className=" absolute top-1.5 left-1.5 bg-white text-teal-900 py-1 px-1.5 z-[3] font-semibold text-sm">
            {item.attributes?.Location}
          </span>
          <img
            src={`${item.attributes?.img?.data?.attributes?.url}`}
            alt=""
            className="mainImg w-full h-full object-cover"
          />
        </div>
        <div className=" flex justify-between items-center">
          {/* <h2 className=" text-lg font-medium">{item.name}</h2> */}
          <p className="price"> {item.attributes?.Price} kr</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

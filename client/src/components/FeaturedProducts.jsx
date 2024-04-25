import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useFetch from "../../hooks/useFetch";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch(
    "/products?filters[featured][$eq]=true&populate=*"
  );

  console.log(data);
  const [sliderId] = useState(
    `slider-${Math.random().toString(36).substring(7)}`
  );

  const slideLeft = (sliderId) => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft = Math.max(slider.scrollLeft - 500);
  };

  const slideRight = (sliderId) => {
    let slider = document.getElementById(sliderId);
    slider.scrollLeft = Math.max(slider.scrollLeft + 500);
  };

  if (loading || !data) return <>Loading….</>;
  if (error) return <>Something went wrong!</>;

  return (
    <div className="featuredProducts py-14 bg-light-100 w-screen">
      <div className="top mb-12 max-w-[1440px] mx-auto  w-full">
        <h1 className=" text-3xl font-bold capitalize">Just Added</h1>
      </div>
      <div
        className="bottom bg-coral-400 flex justify-center w-screen items-center  group"
        style={{ overflowX: "hidden" }}
      >
        <IoIosArrowDropleftCircle
          onClick={() => {
            slideLeft(sliderId);
          }}
          className=" absolute left-0 text-spindle-900 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={sliderId}
          className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {data?.map((item) => (
            <div
              className="inline-block relative py-[1px] px-[.5px] hover:bg-m_darkGrey cursor-pointer"
              key={item.id}
            >
              <ProductCard item={item} />
            </div>
          ))}
        </div>
        <IoIosArrowDroprightCircle
          onClick={() => {
            slideRight(sliderId);
          }}
          className=" absolute right-0 text-spindle-900 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;

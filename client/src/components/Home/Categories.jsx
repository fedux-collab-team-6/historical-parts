import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import CategoryItem from "./CategoryItem";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Skeleton from "../CrossApp/Skeleton";

const Categories = () => {
  const { data, loading, error } = useFetch("/categories?populate=*");

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

  if (error) return <>Something went wrong!</>;

  return (
    <div className=" flex justify-center w-full py-14 bg-light-100">
      <div
        className="flex justify-center items-center gap-4 px-7 overflow-x-scroll sm:overflow-x-hidden group mx-auto relative"
        style={{ overflowX: "hidden" }}
      >
        <IoIosArrowBack
          onClick={() => {
            slideLeft(sliderId);
          }}
          className=" absolute left-0 text-spindle-900 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          size={40}
        />
        <div
          id={sliderId}
          className=" w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {loading ? (
            <div className="inline-flex relative p-3 cursor-pointer gap-20">
              {[...Array(5)].map((_, index) => (
                <div key={index} className=" overflow-hidden ">
                  <div className="categoryBlock  border-coral-400 border rounded-full py-5">
                    <Skeleton width="80px" height="80px" variant="circle" />
                    <Skeleton width="70px" height="20px" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {data?.map((item) => (
                <div
                  className="inline-flex relative p-3 cursor-pointer mx-7"
                  key={item.id}
                >
                  <CategoryItem item={item} />
                </div>
              ))}
            </>
          )}
        </div>
        <IoIosArrowForward
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

export default Categories;

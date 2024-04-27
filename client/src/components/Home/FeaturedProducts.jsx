import React, { useState } from "react";
import ProductCard from "../CrossApp/ProductCard";
import useFetch from "../../../hooks/useFetch";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Skeleton from "../CrossApp/Skeleton";

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

  // if (loading || !data) return <>Loading….</>;
  if (error) return <>Something went wrong!</>;

  return (
    <div className="featuredProducts py-14 bg-light-100 w-screen">
      <div className="top mb-6 max-w-[1440px] mx-auto  w-full px-4">
        <h1 className=" text-3xl font-bold capitalize">Just Added</h1>
      </div>
      <div
        className="bottom relative mx-auto bg-coral-400 flex justify-center w-screen items-center  group"
        style={{ overflowX: "hidden" }}
      >
        <IoIosArrowBack
          onClick={() => {
            slideLeft(sliderId);
          }}
          className=" absolute left-0 text-light-100 bg-spindle-700 opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block  py-3 h-36 w-8"
          size={40}
        />
        <div
          id={sliderId}
          className="overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {loading ? (
            <div className="inline-flex relative p-4 cursor-pointer bg-spindle-50">
              {[...Array(10)].map((_, index) => (
                <div key={index} className=" skeletonBlock ">
                  <div className="cardSkeleton  border-[1px] border-coral-400 p-2">
                    <div className="cardSkeletonImage h-[270px] ">
                      <Skeleton width="100px" height="140px" />
                      {/* <Skeleton width="100%" height="10px" /> */}
                    </div>
                    <div className="cardSkeletonTitle">
                      <Skeleton width="70px" height="20px" />
                    </div>
                    <div className=" flex flex-col gap-2">
                      <Skeleton width="250px" height="20px" />
                      <Skeleton height="10px" variant="paragraph" />
                      <Skeleton height="10px" variant="paragraph" />
                      <Skeleton height="10px" variant="paragraph" />
                      <Skeleton height="10px" width="50%" variant="paragraph" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {data?.map((item) => (
                <div
                  className="inline-block relative py-[1px] px-[.5px] hover:bg-spindle-900 cursor-pointer"
                  key={item.id}
                >
                  <ProductCard item={item} />
                </div>
              ))}
            </>
          )}
        </div>
        <IoIosArrowForward
          onClick={() => {
            slideRight(sliderId);
          }}
          className=" absolute right-0 text-light-100 bg-spindle-700 opacity-50 hover:opacity-100 cursor-pointer z-20 hidden group-hover:block py-3 h-36 w-8"
          size={40}
        />
      </div>
    </div>
  );
};

export default FeaturedProducts;

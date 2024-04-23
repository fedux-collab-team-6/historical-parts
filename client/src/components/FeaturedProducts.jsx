import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = () => {
  const { data, loading, error } = useFetch(
    "/products?filters[featured][$eq]=true&populate=*"
  );

  return (
    <div className="featuredProducts my-24 mx-24">
      <div className="top mb-12">
        <h1 className=" text-3xl font-bold capitalize">Featured Products</h1>
      </div>
      <div className="bottom flex justify-center gap-12">
        {error
          ? "Something went wrong!"
          : loading
            ? "loading"
            : data?.map((item) => <ProductCard item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;

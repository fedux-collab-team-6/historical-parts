import React from "react";
import ProductCard from "./ProductCard";
import useFetch from "../../hooks/useFetch";

const ProductsList = () => {
  const { data, loading, error } = useFetch("/doors?populate=*");

  return (
    <div className="productsList flex justify-between flex-wrap">
      {error
        ? "Something went wrong!"
        : loading
          ? "loading"
          : data?.map((item) => <ProductCard item={item} key={item.id} />)}
    </div>
  );
};

export default ProductsList;

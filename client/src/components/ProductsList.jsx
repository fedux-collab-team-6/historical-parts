import React from "react";
import ProductCard from "./ProductCard";
import useFetch from "../../hooks/useFetch";
import filterstring from "../helpers/filter";
const ProductsList = ({ catId, selectedFilter }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?[filters][categories][id][$eq]=${catId}&populate=*`
  // );

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedFilter.map((item) => `&[filters][shippingOptions][$eq]=${item}`)}`
  // );

  const filterQuery = encodeURI(filterstring(selectedFilter));
  const categoryFilter = `&filters[categories][id][$eq]=${catId}`;

  console.log("Filter query is " + filterQuery);
  const { data, loading, error } = useFetch(
    `/products?` + filterQuery + categoryFilter + "&populate=*"
  );

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

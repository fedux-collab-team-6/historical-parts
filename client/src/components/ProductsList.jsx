import React from "react";
import ProductCard from "./ProductCard";
import useFetch from "../../hooks/useFetch";
import filterstring from "../helpers/filter.js";
const ProductsList = ({ catId, selectedFilter }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?[filters][categories][id][$eq]=${catId}&populate=*`
  // );

  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id][$eq]=${catId}${selectedFilter.map((item) => `&[filters][shippingOptions][$eq]=${item}`)}`
  // );

  const filterQuery = encodeURI(filterstring(selectedFilter));
  const categoryFilter = `&filters[categories][id][$eq]=${catId}`;

  const { data, loading, error } = useFetch(
    `/products?` + filterQuery + categoryFilter + "&populate=*"
  );

  if (loading || !data) return <>Loading….</>;
  if (error) return <>Error</>;

  return (
    <div className="productsList flex justify-start flex-wrap">
      {data?.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsList;

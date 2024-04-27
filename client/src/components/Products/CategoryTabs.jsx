import React, { useState, useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import Button from "../CrossApp/Button";

const CategoryTabs = () => {
  const { data, loading, error } = useFetch("/categories?populate=*");
  console.log(data);
  if (loading || !data) return <>Loading….</>;
  if (error) return <>Something went wrong!</>;
  return (
    <div className=" flex justify-start w-full">
      <div>
        {data?.map((item) => (
          <div
            className=" inline-flex relative p-1 cursor-pointer"
            key={item.id}
          >
            <Button
              label={item.attributes?.title}
              primary={false}
              icon=""
              url={`/products/${item.id}`}
              item={item}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryTabs;

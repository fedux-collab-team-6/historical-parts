import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import "../components/style-components/categories.css";

const CategoryItem = ({ item }) => {
  return (
    <Link className=" overflow-hidden " to={`/products/${item.id}`}>
      <div className="categoryBlock border-coral-400 border rounded-full hover:bg-light-200 cursor-pointer">
        <img
          className=" h-[80px] w-[80px]"
          src={`${item.attributes?.img?.data?.attributes?.url}`}
          alt=""
        />
        <p className=" text-sm">{item.attributes?.title}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;

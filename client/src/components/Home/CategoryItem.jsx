import React from "react";
import { Link } from "react-router-dom";
// import "../components/style-components/categories.css";

const CategoryItem = ({ item }) => {
  console.log(item);
  return (
    <Link className=" overflow-hidden " to={`/products/${item.id}`}>
      <div className=" flex flex-col justify-center items-center gap-5 border-coral-400 border rounded-full py-4 px-2 hover:bg-light-200 cursor-pointer h-[180px] w-[120px]">
        <img src={`${item.attributes?.img?.data?.attributes?.url}`} alt="" />
        <p className=" text-sm">{item.attributes?.title}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;

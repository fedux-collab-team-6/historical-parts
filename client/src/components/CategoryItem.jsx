import React from "react";
import { Link } from "react-router-dom";
import "../components/style-components/categories.css";

const CategoryItem = ({ item }) => {
  console.log(item);
  return (
    <Link className="link" to={`/products/${item.id}`}>
      <img src={`${item.attributes?.img?.data?.attributes?.url}`} alt="" />
      {item.attributes?.title}
    </Link>
  );
};

export default CategoryItem;

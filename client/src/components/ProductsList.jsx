import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = () => {
  const data = [
    {
      id: 1,
      img: "./images/pro1.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: true,
    },
    {
      id: 2,
      img: "./images/pro2.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: false,
    },
    {
      id: 3,
      img: "./images/pro3.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: true,
    },
    {
      id: 4,
      img: "./images/pro4.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: false,
    },
    {
      id: 5,
      img: "./images/pro5.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: true,
    },
  ];
  return (
    <div className="productsList flex justify-between flex-wrap">
      {data.map((item) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProductsList;

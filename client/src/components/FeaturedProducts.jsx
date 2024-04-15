import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const data = [
    {
      id: 1,
      img: "./public/images/pro1.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: true,
    },
    {
      id: 2,
      img: "./public/images/pro2.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: false,
    },
    {
      id: 3,
      img: "./public/images/pro3.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: true,
    },
    {
      id: 4,
      img: "./public/images/pro4.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: false,
    },
    {
      id: 5,
      img: "./public/images/pro5.jpeg",
      price: 20,
      name: "Vintage Blue Door",
      descrption: "A vintage blue door of an old building.",
      isNew: true,
    },
  ];
  return (
    <div className="featuredProducts my-24 mx-24">
      <div className="top mb-12">
        <h1 className=" text-3xl font-bold capitalize">Featured Products</h1>
      </div>
      <div className="bottom flex justify-center gap-12">
        {data.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

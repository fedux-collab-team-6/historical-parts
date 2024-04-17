import React, { useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const data = [
    "../public/images/sng-pro1.jpg",
    "../public/images/sng-pro2.jpg",
  ];
  return (
    <div className="product py-5 px-12 flex gap-12">
      <div className="left flex-1">
        <div className="images">
          <img src={data[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={data[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={data[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right flex-1 flex-col gap-7">
        <h3>Title</h3>
        <span>99kr</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus
          ipsa sed velit repellat commodi mollitia incidunt cum repellendus
          minus.
        </p>
        <button className="addToCartBtn">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="link">
          <FavoriteBorderIcon /> ADD TO WISHLIST
        </div>
        <div className="info">
          <span>Seller: Hassen</span>
          <span>Product Type: Door</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

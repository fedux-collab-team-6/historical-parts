import React, { useState } from "react";

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
      <div className="right flex-1">
        <h3>Title</h3>
        <span>99kr</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus
          ipsa sed velit repellat commodi mollitia incidunt cum repellendus
          minus.
        </p>
      </div>
    </div>
  );
};

export default Product;

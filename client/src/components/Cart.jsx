import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
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
  ];

  return (
    <div className="cart absolute right-5 top-20 z-40 bg-white p-5 shadow-xl rounded-md">
      <h3 className=" text-lg font-bold mb-3">Products in your cart</h3>
      {data.map((item) => (
        <div className="item flex items-center gap-5 mb-7" key={item.id}>
          <img className=" w-20 h-24 object-cover" src={item.img} alt="" />
          <div className="details">
            <h4 className=" font-bold">{item.name}</h4>
            <p>{item.descrption?.substring(0, 100)}...</p>
            <p className=" text-gray-500 text-sm mt-3">{item.price} kr</p>
          </div>
          <DeleteOutlinedIcon className="delete text-red-600 cursor-pointer" />
        </div>
      ))}
      <a href="#" className="reset">
        Reset List
      </a>
    </div>
  );
};

export default Cart;

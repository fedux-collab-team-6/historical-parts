import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  // console.log("Cart Products: ", products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="cart absolute right-5 top-20 z-40 bg-white p-5 shadow-xl rounded-md">
      <h3 className=" text-lg font-bold mb-3">Products in your cart</h3>
      {products.map((item) => (
        <div className="item flex items-center gap-5 mb-7" key={item.id}>
          <img className="w-20 h-24 object-cover" src={item.img} alt="" />
          <div className="details">
            <h4 className="font-bold">{item.category}</h4>
            {/* <p>{item.descrption?.substring(0, 100)}...</p> */}
            <p className="text-gray-500 text-sm mt-3">{item.price} kr</p>
          </div>
          <DeleteOutlinedIcon
            className=" text-red-600 cursor-pointer"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className=" flex justify-between font-semibold text-lg mb-5">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button className=" w-60 p-2.5 flex items-center justify-center gap-5 cursor-pointer border-none bg-[#2879fe] text-white font-semibold mb-5">
        PROCEED TO CHECKOUT
      </button>
      <span
        className=" text-red-600 text-xs cursor-pointer"
        onClick={() => dispatch(resetCart())}
      >
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;

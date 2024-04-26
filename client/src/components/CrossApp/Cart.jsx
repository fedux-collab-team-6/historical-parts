import React from "react";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../../redux/cartReducer";
import { Link } from "react-router-dom";
import Button from "./Button";

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
    <div className="cart absolute right-5 top-20 z-40 bg-light-200 border-[1px] border-coral-400 p-5 shadow-xl rounded-md">
      <h3 className=" text-lg font-bold mb-3">Products in your cart</h3>
      {products.length === 0 ? (
        <p className=" text-center py-9">(Cart is empty)</p>
      ) : (
        <>
          {products.map((item) => (
            <div className="item flex justify-between gap-4 mb-7" key={item.id}>
              <div className=" w-20 h-24">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="details">
                <h4 className=" text-sm font-bold">{item.era}</h4>
                <p className=" text-xs w-[25ch]">
                  {item.desc?.substring(0, 80)}...
                </p>
                <p className="text-gray-500 text-sm mt-3 font-bold">
                  {item.price} kr
                </p>
              </div>
              <DeleteOutlinedIcon
                className=" text-red-600 cursor-pointer self-center"
                onClick={() => dispatch(removeItem(item.id))}
              />
            </div>
          ))}
          <div className=" flex justify-between font-bold text-base mb-5">
            <span>Subtotal</span>
            <span>${totalPrice()}</span>
          </div>
          <Button label="Proceed to Checkout" primary={true} />
          <div className=" inline-block text-red-600 text-sm underline underline-offset-4 hover:no-underline font-[600] cursor-pointer mt-5">
            <Link onClick={() => dispatch(resetCart())}>Reset Cart</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

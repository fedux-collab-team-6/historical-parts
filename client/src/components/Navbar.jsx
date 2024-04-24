import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <header className="navbar text-base p-3">
      <div className="wrapper py-4 px-8 flex justify-between items-center">
        <div className="left h-14">
          <Link to="/">
            <img
              className=" h-full w-full"
              src="./images/historical-logo.svg"
            />
          </Link>
        </div>
        <div className="center text-2xl font-bold tracking-wide flex">
          <div className="item flex items-center">
            <Link to="/">About Us</Link>
          </div>
          <div className="item flex items-center">
            <Link to="/">Blog</Link>
          </div>
          <div className="item flex items-center">
            <Link to="/">Contact Us</Link>
          </div>
        </div>
        <div className="right flex items-center gap-6">
          <div className="icons flex gap-4 text-gray-500 cursor-pointer">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon relative" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className=" absolute text-xs w-5 h-5 rounded-full bg-cyan-600 text-white -top-2.5 -right-2.5 flex justify-center items-center">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </header>
  );
};

export default Navbar;

import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import Cart from "./Cart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar h-20 text-base">
      <div className="wrapper py-4 px-8 flex justify-between items-center">
        <div className="left flex items-center gap-6">
          <div className="item flex items-center">
            <span>SEK</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item flex items-center">
            <Link to="/products/1">Doors</Link>
          </div>
          <div className="item flex items-center">
            <Link to="/products/1">Windows</Link>
          </div>
          <div className="item flex items-center">
            <Link to="/products/1">Tiles</Link>
          </div>
          <div className="item flex items-center">
            <Link to="/products/1">Roofs</Link>
          </div>
        </div>
        <div className="center text-2xl font-bold tracking-wide">
          <Link to="/">HISTORICAL PARTS</Link>
        </div>
        <div className="right flex items-center gap-6">
          <div className="item flex items-center">
            <Link to="/">About Us</Link>
          </div>
          <div className="item flex items-center">
            <Link to="/">Blog</Link>
          </div>
          <div className="item flex items-center">
            <Link to="/">Contact Us</Link>
          </div>
          <div className="icons flex gap-4 text-gray-500 cursor-pointer">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon relative" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className=" absolute text-xs w-5 h-5 rounded-full bg-cyan-600 text-white -top-2.5 -right-2.5 flex justify-center items-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;

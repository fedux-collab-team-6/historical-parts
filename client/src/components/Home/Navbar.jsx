import React, { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link, NavLink, useLocation } from "react-router-dom";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import { logo, logoWhite } from "../../constants/images";
import { navList } from "../../constants/data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 780) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <header className=" w-full h-20 bg-spindle-200 sticky top-0 z-50 border-b-[1px] border-b-coral-400">
      <nav className=" h-full px-4 max-w-[1440px] mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <img className=" w-32 object-cover" src={logo} />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center w-auto z-50 p-0 gap-2"
              >
                <>
                  {navList.map(({ id, path, label }) => (
                    <NavLink
                      key={id}
                      to={path}
                      state={{ data: location.pathname.split("/")[1] }}
                      className=" flex font-normal h-6 justify-center items-center px-2 text-base text-spindle-900  hover:text-coral-400 hoverEffect"
                    >
                      <li> {label}</li>
                    </NavLink>
                  ))}
                </>
              </motion.ul>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4 text-spindle-900"
            />
            {sidenav && (
              <div className=" fixed top-0 left-0 w-full h-screen bg-spindle-900 text-coral-400 bg-opacity-80 z-50">
                <motion.div
                  initial={{ x: -300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className=" w-full h-full bg-spindle-900 border-r-[1px] border-r-coral-400 p-6 ">
                    <img
                      className=" w-44 mb-6"
                      src={logoWhite}
                      alt="logo white"
                    />
                    <ul className=" text-light-200 flex flex-col py-12 gap-4">
                      {navList.map((item) => (
                        <li
                          key={item.id}
                          className=" font-normal items-center text-lg text-light-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white  hoverEffect last:border-r-0"
                        >
                          <NavLink
                            to={item.path}
                            state={{ data: location.pathname.split("/")[1] }}
                            onClick={() => setSidenav(false)}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <div className="right flex items-center gap-6 mt-6">
                      <div className="icons flex gap-4 text-light-200 cursor-pointer">
                        <PersonOutlineOutlinedIcon />
                        <div
                          className="cartIcon relative"
                          onClick={() => setOpen(!open)}
                        >
                          <ShoppingCartOutlinedIcon />
                          <span className=" absolute text-xs w-5 h-5 rounded-full bg-coral-400 text-white -top-2.5 -right-2.5 flex justify-center items-center">
                            {products.length}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-coral-400 border-l-0 bg-spindle-900 absolute top-2 -right-[31px] text-coral-400 text-2xl flex justify-center items-center cursor-pointer hover:border-coral-400 hover:text-light-200 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
          <div className="right md:flex items-center gap-6 hidden">
            <div className="icons flex gap-4 text-spindle-900 cursor-pointer">
              <PersonOutlineOutlinedIcon />
              <div className="cartIcon relative" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span className=" absolute text-xs w-5 h-5 rounded-full bg-coral-400 text-white -top-2.5 -right-2.5 flex justify-center items-center">
                  {products.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="wrapper py-4 px-8 flex justify-between items-center">
        <div className="left h-14">
          <Link to="/">
            <img className=" h-full w-full" src={logo} />
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
            <PersonOutlineOutlinedIcon />
            <div className="cartIcon relative" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span className=" absolute text-xs w-5 h-5 rounded-full bg-cyan-600 text-white -top-2.5 -right-2.5 flex justify-center items-center">
                {products.length}
              </span>
            </div>
          </div>
        </div>
      </div>*/}
      {open && <Cart />}
    </header>
  );
};

export default Navbar;

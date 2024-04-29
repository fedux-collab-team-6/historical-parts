import React from "react";
import { footerNav, socialsNav } from "../../constants/data";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();

  const renderIcon = (iconName) => {
    switch (iconName) {
      case "FaFacebookF":
        return <FaFacebookF />;
      case "FaLinkedin":
        return <FaLinkedin />;
      case "FaInstagram":
        return <FaInstagram />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-spindle-950 text-light-200 flex justify-center items-center flex-col py-14 gap-6">
      <div className=" flex">
        {footerNav.map(({ id, path, label }) => (
          <NavLink
            key={id}
            to={path}
            state={{ data: location.pathname.split("/")[1] }}
            className=" flex font-[400] h-6 justify-center items-center px-2 text-[15px] text-light-200  hover:text-coral-400 hoverEffect hover:underline-offset-8 p-2"
          >
            {label}
          </NavLink>
        ))}
      </div>
      <div className="socials flex flex-row font-[400] h-10 justify-center items-center px-2 text-[15px]  p-2 gap-6">
        {socialsNav.map(({ id, icon, href }) => (
          <a
            key={id}
            target="_blank"
            href={href}
            className="text-light-200 hover:text-coral-400 hoverEffect cursor-pointer"
          >
            {renderIcon(icon)}
          </a>
        ))}
      </div>
      <div className="copyright">
        <p>&copy; Copyright {new Date().getFullYear()} | Historical Parts</p>
      </div>
    </footer>
  );
};

export default Footer;

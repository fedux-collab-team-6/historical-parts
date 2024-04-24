import React from "react";
import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-spindle-950 text-light-200 flex justify-center items-center flex-col py-24 gap-6">
      <div className="">
        <ul className=" flex gap-12">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="socials">
        <ul className=" flex gap-7">
          <li>
            <a href="#">
              <FaFacebookF size={20} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaLinkedin size={20} />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagram size={20} />
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">
        <p>&copy; Copyright {new Date().getFullYear()} - Historical Parts</p>
      </div>
    </footer>
  );
};

export default Footer;

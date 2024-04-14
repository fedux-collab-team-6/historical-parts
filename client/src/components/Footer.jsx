import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-24 mr-48 mb-5 ml-48">
      <div className="top flex gap-12">
        <div className="item flex-1 flex flex-col gap-2.5 text-justify text-sm">
          <h3 className=" text-lg font-medium text-gray-600">Categories</h3>
          <span className=" text-sm text-gray-400">Doors</span>
          <span className=" text-sm text-gray-400">Windows</span>
          <span className=" text-sm text-gray-400">Tiles</span>
          <span className=" text-sm text-gray-400">Roofs</span>
        </div>
        <div className="item flex-1 flex flex-col gap-2.5 text-justify text-sm">
          <h3 className=" text-lg font-medium text-gray-600">Links</h3>
          <span className=" text-sm text-gray-400">FAQ</span>
          <span className=" text-sm text-gray-400">About Us</span>
          <span className=" text-sm text-gray-400">Blog</span>
          <span className=" text-sm text-gray-400">Contact Us</span>
        </div>
        <div className="item flex-1 flex flex-col gap-2.5 text-justify text-sm">
          <h3 className=" text-lg font-medium text-gray-600">About</h3>
          <span className=" text-sm text-gray-400">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className="item flex-1 flex flex-col gap-2.5 text-justify text-sm">
          <h3 className=" text-lg font-medium text-gray-600">Contact</h3>
          <span className=" text-sm text-gray-400">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      <div className="bottom flex items-center justify-between mt-12">
        <div className="left flex items-center">
          <span className="logo text-[#2879fe] font-bold text-lg">
            Historical Parts
          </span>
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
        <div className="right ml-5 text-sm text-gray-400">
          <img className=" h-12" src="/images/payment.png" alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

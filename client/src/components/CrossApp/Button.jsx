import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, primary, icon, url }) => {
  return (
    <Link
      className={`block ${primary ? "bg-spindle-900 hover:text-spindle-900 border-spindle-900" : " bg-coral-400 hover:bg-none hover:text-coral-400 border-coral-400"} cursor-pointer  text-light-200 hover:bg-light-200  rounded-full w-full text-base px-4 py-1 mb-3 flex items-center justify-center border-[1px]`}
      to={url}
    >
      {icon && <span className=" inline-flex items-center mr-2">{icon}</span>}
      {label}
    </Link>
  );
};

export default Button;

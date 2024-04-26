import React from "react";

const Button = ({ label, primary, icon }) => {
  return (
    <button
      className={`block ${primary ? "bg-spindle-900 hover:text-spindle-900 border-spindle-900" : " bg-coral-400 hover:bg-none hover:text-coral-400 border-coral-400"}  text-light-200 hover:bg-light-200  rounded-full w-full text-sm px-10 mt-4 py-2 flex items-center justify-center border-[1px]`}
    >
      {icon && <span className=" inline-flex items-center mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;

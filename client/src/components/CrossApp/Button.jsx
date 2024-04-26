import React from "react";

const Button = ({ label }) => {
  return (
    <button className="block bg-coral-400 text-light-200 rounded-full w-full text-sm px-10 mt-4 py-2">
      {label}
    </button>
  );
};

export default Button;

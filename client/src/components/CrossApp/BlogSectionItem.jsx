import React from "react";
import { Link } from "react-router-dom";

const BlogSectionItem = ({ item, height }) => {
  return (
    <Link to={item.link} key={item.id}>
      <div
        className={`left flex-1 relative border-[1px] border-spindle-900 ${height ? "h-[416px]" : "null"} `}
      >
        <img className=" w-full h-full object-cover" src={item.image} alt="" />
        <div className=" absolute h-full w-full top-0 left-0 hover:bg-spindle-900/70 flex justify-center items-center cursor-pointer p-7">
          <div className=" bg-spindle-200 py-6 px-10 w-[80%] text-center text-spindle-900">
            <h2 className="uppercase tracking-wider ">{item.title}</h2>
            <p className=" font-[600] tracking-wider ">{item.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogSectionItem;

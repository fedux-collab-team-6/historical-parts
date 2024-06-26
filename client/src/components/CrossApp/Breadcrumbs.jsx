import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ prevLocation, title }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="w-full py-10 sm:py-10 flex gap-3">
      {/* <h1 className=" text-2xl font-bold">{title}</h1> */}
      <p className="text-sm font-normal text-spindle-900 capitalize flex items-center">
        <span>
          {" "}
          {prevLocation === "" ? (
            <a className=" hover:font-bold" href="/">
              Home
            </a>
          ) : (
            prevLocation
          )}
        </span>

        <span className="px-1">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize font-semibold">{locationPath}</span>
      </p>
    </div>
  );
};

export default Breadcrumbs;

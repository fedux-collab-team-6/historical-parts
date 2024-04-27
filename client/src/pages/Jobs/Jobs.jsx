import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/CrossApp/Breadcrumbs";
import { useLocation } from "react-router-dom";

const Jobs = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.pathname);
  }, [location]);

  return (
    <div className="w-full">
      <div className="px-4 max-w-[1440px] mx-auto ">
        <Breadcrumbs title="" prevLocation="" />
        <div className=" flex justify-center items-center flex-col translate-y-[80%] h-full">
          <h1>Jobs Page</h1>
          <h5>Coming soon...</h5>
        </div>
      </div>
    </div>
  );
};

export default Jobs;

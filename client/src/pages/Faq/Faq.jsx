import React, { useEffect, useState } from "react";
import Breadcrumbs from "../../components/CrossApp/Breadcrumbs";
import { useLocation } from "react-router-dom";

const Faq = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.pathname);
  }, [location]);

  return (
    <div className="max-w-[1440px] py-4 px-12 flex gap-4 mx-auto">
      <div>
        <Breadcrumbs title="About" prevLocation="" />
      </div>
      <div className=" flex justify-center items-center flex-col translate-y-[80%] h-full">
        <h1>FAQ Page</h1>
        <h5>Coming soon...</h5>
      </div>
    </div>
  );
};

export default Faq;

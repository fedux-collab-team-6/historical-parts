import React from "react";
import { inspirationThumb, renovationThumb } from "../../constants/images";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    title: "Inspiration",
    description: "tips and guidance",
    image: inspirationThumb,
    link: "/inspiration",
  },
  {
    id: 2,
    title: "Renovation",
    description: "with our collaboration partners",
    image: renovationThumb,
    link: "/renovation",
  },
];
const BlogSection = () => {
  return (
    <section className=" flex flex-col lg:flex-row">
      {data.map((item) => (
        <Link to={item.link} key={item.id}>
          <div className="left flex-1 relative border-[1px] border-spindle-900">
            <img src={item.image} alt="" />
            <div className=" absolute h-full w-full top-0 left-0 hover:bg-spindle-900/70 flex justify-center items-center cursor-pointer p-7">
              <div className=" bg-spindle-200 py-6 px-10 text-center text-spindle-900">
                <h2 className=" text-[56px] font-bold uppercase tracking-wider ">
                  {item.title}
                </h2>
                <p className=" text-[24px] font-bold tracking-wider ">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
      {/* <div className="left flex-1 relative">
        <img src={inspirationThumb} alt="" />
        <div className=" absolute h-full w-full top-0 left-0 hover:bg-spindle-900/50 flex justify-center items-center">
          <div className=" bg-spindle-200 py-6 px-10 text-center text-spindle-900">
            <h2 className=" text-[56px] font-bold uppercase tracking-wider ">
              Inspiration
            </h2>
            <p className=" text-[24px] font-bold tracking-wider ">
              tips and guidance
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="right flex-1 relative">
        <img src={renovationThumb} alt="" />
      </div> */}
    </section>
  );
};

export default BlogSection;

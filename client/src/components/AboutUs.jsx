import { aboutUsHome } from "../constants/images";

const AboutUs = () => {
  return (
    <section className=" py-16 md:p-0">
      <div className=" max-w-[1240px] p-10 flex flex-col-reverse md:flex-row justify-center items-center mx-auto">
        <div className="left flex-1 md:rounded-s-full md:rounded-e-full md:rounded-tr-none rounded-b-full overflow-hidden">
          <img
            className=" w-full h-full object-cover"
            src={aboutUsHome}
            alt=""
          />
        </div>
        <div className="right flex-1 relative border-[1px] md:-translate-y-[20%] border-spindle-900 border-b-0 md:border-b-[1px] md:border-l-0  ">
          <div className="py-20 px-14 text-center md:text-left">
            <h2 className=" text-3xl font-bold mb-5">
              WE ARE HISTORICAL PARTS
            </h2>
            <p>
              An AI powered platform to connect architects, buyers and sellers
              with reusable building components, specifically interior doors, An
              AI powered platform to connect architects, buyers and sellers with
              reusable building components, specifically interior doors,
            </p>
          </div>
          <span className=" w-5 h-5 rounded-full border-spindle-900 bg-spindle-900 absolute -top-3 -left-3"></span>
          <span className=" w-5 h-5 rounded-full border-spindle-900 bg-spindle-900 absolute -top-3 -right-3"></span>
          <span className=" w-5 h-5 rounded-full border-spindle-900 bg-spindle-900 absolute -bottom-3 -right-3"></span>
          <span className=" w-5 h-5 rounded-full border-spindle-900 border-[1px] bg-light-100 absolute -bottom-3 -left-3"></span>

          <span className=" w-10 h-16 md:h-28 block md:hidden border-spindle-900 border-[1px] md:border-[1px] border-l-0 md:border-l-[1px]  md:border-r-0 border-t-0  md:border-b-0 absolute -top-16 -left-10 md:-bottom-28  md:-right-10"></span>

          <span className=" w-10 h-16 md:h-28 hidden md:block border-spindle-900 border-[1px] md:border-[1px] border-l-0 md:border-l-[1px]  md:border-r-0 border-t-0  md:border-b-0 absolute -bottom-28  -right-10"></span>

          <span className=" w-10 h-16  md:h-20 block border-spindle-900 border-[1px] md:border-[1px]  border-t-0 border-r-0 md:border-t-0 md:border-r-0 absolute -top-16  md:-top-20 -right-10"></span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

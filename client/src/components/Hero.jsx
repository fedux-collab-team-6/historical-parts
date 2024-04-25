import { hero, logo } from "../constants/images";

const Hero = () => {
  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  // };
  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  // };

  return (
    <section className="h-[calc(80vh-80px)] w-screen relative overflow-hidden flex bg-spindle-200">
      <div className="left flex-[3] p-9 flex justify-center items-center md:static absolute h-full w-full">
        {/* <h1>HISTORICAL PARTS</h1> */}
        <img src={logo} alt="header logo" />
      </div>
      <div className="right flex-1 ml-44 md:ml-0">
        <img
          className=" h-full w-full object-cover"
          src={hero}
          alt="hero image"
        />
      </div>
      {/* <section className="hero">
        <div className="hero-content">
          <h1>HISTORICAL PARTS</h1>
        </div>
        <div
          className="hero-image"
          style={{ backgroundImage: "url('./../images/hero.png')" }}
        ></div>
      </section> */}

      {/* <div className="icons absolute w-full h-full flex items-center justify-center gap-2.5 z-10">
        <div className="icon w-[50px] h-[50px] border border-white flex items-center justify-center cursor-pointer text-white">
          <WestOutlinedIcon />
        </div>
      </div> */}
    </section>
  );
};

export default Hero;

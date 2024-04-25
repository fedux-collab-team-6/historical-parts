//import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
//import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

//const data = [
// "../images/bnr1.jpg",
// "../images/bnr2.webp",
// "../images/bnr3.jpg",
//];
const Hero = () => {
  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  // };
  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  // };

  return (
    <div className="h-[calc(80vh-80px)] w-screen relative overflow-hidden">
      <section className="hero">
        <div className="hero-content">
          <h1>HISTORICAL PARTS</h1>
        </div>
        <div
          className="hero-image"
          style={{ backgroundImage: "url('./../images/hero.png')" }}
        ></div>
      </section>

      {/* <div className="icons absolute w-full h-full flex items-center justify-center gap-2.5 z-10">
        <div className="icon w-[50px] h-[50px] border border-white flex items-center justify-center cursor-pointer text-white">
          <WestOutlinedIcon />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;

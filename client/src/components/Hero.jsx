// import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const data = ["./images/bnr1.jpg", "./images/bnr2.webp", "./images/bnr3.jpg"];
const Hero = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);

  // const prevSlide = () => {
  //   setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  // };
  // const nextSlide = () => {
  //   setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  // };

  return (
    <div className="h-[calc(100vh-80px)] w-screen relative overflow-hidden">
      <Swiper
        spaceBetween={0}
        effect={"fade"}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className=" w-screen h-full object-cover" src={data[0]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-screen h-full object-cover" src={data[1]} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-screen h-full object-cover" src={data[2]} alt="" />
        </SwiperSlide>
      </Swiper>
      {/* <div className="icons absolute w-full h-full flex items-center justify-center gap-2.5 z-10">
        <div className="icon w-[50px] h-[50px] border border-white flex items-center justify-center cursor-pointer text-white">
          <WestOutlinedIcon />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import sliderData from "../fakeData/SliderData";

export default function Slide() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {sliderData.map((item, index) => (
        <SwiperSlide>
          <div className=" bg-white flex items-center w-full h-[100vh]">
            <div className="w-1/2 pl-10">
              <center>
                <p className="text-sm mb-9">{item.type}</p>
                <img className="h-32 mb-10" src={item.icon} alt="" />
                <p className="text-4xl font-bold max-w-sm mb-9">{item.text}</p>
                <a href="">
                  <button className="px-24 py-4 bg-cyan-600 rounded-full text-xl text-white font-bold">
                    Learn More
                  </button>
                </a>
              </center>
            </div>
            <div className="w-1/2 flex justify-center items-center">
              <img src={item.image} alt="" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

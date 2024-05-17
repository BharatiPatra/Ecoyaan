import React, { useRef, useState } from "react";
import carousel1 from "../../assets/carousel1.png";
import carousel2 from "../../assets/carousel2.png";
import carousel3 from "../../assets/carousel3.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Slider({ bg, h1, p, btn }) {
  return (
    <div
      className="w-full h-screen bg-cover mb-7 bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="h-[100%] flex flex-col justify-start p-5 md:pl-44">
        <div className="space-y-4">
          <h1 className="mt-28 font-bold  md:text-4xl w-[500px] mb-1 text-gray-800">
            {h1}
          </h1>
          <p className="font-normal text-sm md:text-lg lg:text-xl mb-6">{p} </p>
          <button className="border border-none  bg px-3 py-2 rounded-3xl bg-[#16a34a]  text-white mt-2 text-lg">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function HomeImageSlider() {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="w-full h-[100vh]">
          <SwiperSlide>
            <Slider
              bg={carousel1}
              h1="Buy Less,Buy Better"
              p="Authentic source of truth for your sustainability needs"
              btn=" About Us"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              bg={carousel2}
              h1="Follow us on Instagram"
              p="For climate news,lifestyle tips,& updates
"
              btn="Follow Us"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slider
              bg={carousel3}
              h1="Are you a business that truly cares about sustainability?"
              p="we would love to work with you"
              btn="Get In Touch"
            />
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}

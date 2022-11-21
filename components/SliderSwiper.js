import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function SliderSwiper({ media }) {
  return (
    <>
      <Swiper
        pagination={{
          type: "fraction",
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {media.map((i) => (
          <SwiperSlide key={i}>
            <img src={i}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

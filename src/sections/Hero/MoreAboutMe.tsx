"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function MoreAboutMe() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper mt-10"
      >
        <SwiperSlide className="SwiperSlide">Slide 1</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 2</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 3</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 4</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 5</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 6</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 7</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 8</SwiperSlide>
        <SwiperSlide className="SwiperSlide">Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './slider.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa4f645cf-9021-4988-bc74-7f3b38fb02d8_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2F39338d06-4e60-4272-8717-e813fb7f6910_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fc2e74c24-eec4-4138-8747-84ceb27b3f6b_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa95649d2-ee7e-4606-a65e-262015e5b1c6_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fa7b348ce-343a-4127-889b-583edd12b213_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://bellissimo.uz/_next/image?url=https%3A%2F%2Fio.bellissimo.uz%2Fimages%2Fdb9ec296-5c11-474a-a79e-57ed2debd2f2_uz.jpg&w=1920&q=75" alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}
// src/Component/Home/HeroSection.jsx
import React from "react";
import slide1 from "../../assets/Hero section image/slider (1).webp";
import slide2 from "../../assets/Hero section image/slider (2).webp";
import slide3 from "../../assets/Hero section image/slider (3).webp";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles (import once in the project)
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  return (
    <section className="w-full">
      <Swiper
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="w-full rounded"
      >
        {[slide1, slide2, slide3].map((src, idx) => (
          <SwiperSlide key={idx} className="w-full h-full">
            <img
              src={src}
              alt={`slide-${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      sdfsdfsd
    </section>
  );
}

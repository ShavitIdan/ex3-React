import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";

export default function CarDetailsSlider({ items }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const itemsArray = Array.isArray(items) ? items : [];

  return (
    <div className="space-y-6">
      <Swiper
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {itemsArray.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative pb-[70%] overflow-hidden rounded-xl">
              <img
                src={item.image}
                alt={`Car Image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]} 
        className="mySwiper"
      >
        {itemsArray.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative pb-[70%] overflow-hidden rounded sm:rounded-xl">
              <img
                src={item.image}
                alt={`Car Image ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

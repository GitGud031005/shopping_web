import './Banner.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Banner() {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Navigation, Pagination, Autoplay]}
      className="banner"
    >
      <SwiperSlide>
        <img className="banner-figure" src="icon/1.png" alt="Banner 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="banner-figure" src="icon/2.png" alt="Banner 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="banner-figure" src="icon/3.png" alt="Banner 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="banner-figure" src="icon/4.png" alt="Banner 4" />
      </SwiperSlide>
    </Swiper>
  );
}
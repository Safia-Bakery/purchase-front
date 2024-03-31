import { Swiper, SwiperSlide } from "swiper/react";
import slider from "/images/slider1.png";
import { Autoplay, Pagination } from "swiper/modules";

export default function MainSlider() {
  return (
    <section className="lg:absolute inset-0 lg:h-[60svh]">
      <Swiper
        spaceBetween={0}
        loop
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {[slider, slider].map((item, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={item}
              alt={"slider-img"}
              className="lg:h-[60svh] w-full min-h-[280px] object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

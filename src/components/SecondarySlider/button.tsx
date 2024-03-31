import { useSwiper } from "swiper/react";
import arrow from "/icons/whiteArrow.svg";

const SlideButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute top-8 right-0 flex gap-3">
      <button
        onClick={() => swiper?.slidePrev()}
        className="bg-lightGray lg:h-12 h-10 w-10 lg:w-12 rounded-full flex items-center justify-center z-10"
      >
        <img src={arrow} alt={"prev"} />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="bg-lightGray lg:h-12 h-10 w-10 lg:w-12 rounded-full flex items-center justify-center z-10"
      >
        <img src={arrow} alt={"next"} className="rotate-180" />
      </button>
    </div>
  );
};

export default SlideButtons;

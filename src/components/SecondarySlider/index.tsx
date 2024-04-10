import Slider, { Settings } from "react-slick";
import SlideButtons from "./button";
import { ReactNode, useRef } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Loading from "../Loader";

interface Props<T> {
  data: T[];
  component: (arg: T, idx: number) => ReactNode;
}

const settings: Settings = {
  infinite: true,
  speed: 300,
  focusOnSelect: false,
  slidesToShow: window.innerWidth < 1200 ? 1 : 4,
  swipe: true, // Enable swipe functionality
  // autoplay: true, // Enable autoplay
  // autoplaySpeed: 8000, // Set autoplay speed in milliseconds
};

export default function SecondarySlider<TProps>({
  data,
  component,
}: Props<TProps>) {
  const size = useWindowSize();
  const sliderRef = useRef<any>();

  if (!size.width) return <Loading />;
  return (
    <div className="relative ">
      <SlideButtons forwardedRef={sliderRef} />
      <Slider
        ref={sliderRef}
        {...settings}
        // direction="vertical"
        className="lg:!pt-12 lg:-mt-12 !pt-6"
      >
        {[...data, ...data].map((item, idx) => component(item, idx))}
      </Slider>
    </div>
  );
}

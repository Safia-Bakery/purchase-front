import Slider from "react-slick";
import slider from "/images/slider1.png";

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: true, // Enable swipe functionality
  autoplay: true, // Enable autoplay
  autoplaySpeed: 5000, // Set autoplay speed in milliseconds
};
export default function MainSlider() {
  return (
    <section className="lg:absolute inset-0 lg:h-[60svh]">
      <Slider {...settings}>
        {[slider, slider].map((item, idx) => (
          <div key={idx}>
            <img
              src={item}
              alt={"slider-img"}
              className="lg:h-[60svh] w-full min-h-[280px] object-center"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
}

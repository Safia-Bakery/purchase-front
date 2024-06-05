import slider from "/images/slider1.png";

const MainSlider = () => {
  return (
    <section className="lg:absolute inset-0 lg:h-[60svh]">
      <img
        src={slider}
        alt={"slider-img"}
        className="lg:h-[60svh] w-full min-h-[280px] h-full bg-no-repeat object-center bg-cover object-cover"
      />
    </section>
  );
};
export default MainSlider;

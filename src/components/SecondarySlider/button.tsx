import arrow from "/icons/whiteArrow.svg";

interface Props {
  forwardedRef: any;
}

const SlideButtons = ({ forwardedRef }: Props) => {
  const handlePrevious = () => forwardedRef.current.slickPrev();

  const handleNext = () => forwardedRef.current.slickNext();

  return (
    <div className="absolute top-8 right-0 flex gap-3">
      <button
        onClick={handlePrevious}
        className="bg-lightGray lg:h-12 h-10 w-10 lg:w-12 rounded-full flex items-center justify-center z-10"
      >
        <img src={arrow} alt={"prev"} />
      </button>
      <button
        onClick={handleNext}
        className="bg-lightGray lg:h-12 h-10 w-10 lg:w-12 rounded-full flex items-center justify-center z-10"
      >
        <img src={arrow} alt={"next"} className="rotate-180" />
      </button>
    </div>
  );
};

export default SlideButtons;

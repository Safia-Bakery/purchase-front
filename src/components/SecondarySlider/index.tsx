import { Swiper } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import SlideButtons from "./button";
import { ReactNode } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import Loading from "../Loader";

interface Props<T> {
  data: T[];
  component: (arg: T, idx: number) => ReactNode;
}

export default function SecondarySlider<TProps>({
  data,
  component,
}: Props<TProps>) {
  const size = useWindowSize();

  if (!size.width) return <Loading />;
  return (
    <>
      <Swiper
        slidesPerView={size?.width < 1200 ? 1 : 4}
        spaceBetween={30}
        loop
        freeMode={true}
        // direction="vertical"
        className="lg:!pt-12 lg:-mt-12 !pt-6"
        modules={[FreeMode, Pagination]}
      >
        <SlideButtons />
        {[...data, ...data].map((item, idx) => component(item, idx))}
        {/* {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center mt-8">
              <img
                src={slider}
                alt={"side-img"}
                height={360}
                width={360}
                className="rounded-full overflow-hidden"
              />
              <h4 className="uppercase font-bold text-xl text-center my-3">
                гости
              </h4>

              <p className="text-textGray text-center">
                Мы дорожим доверием гостей всех поколений
              </p>
            </div>
          </SwiperSlide>
        ))} */}
      </Swiper>
    </>
  );
}

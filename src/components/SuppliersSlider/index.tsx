import { SwiperSlide } from "swiper/react";
import SecondarySlider from "../SecondarySlider";

import coma from "/icons/coma.svg";

const SuppliersSlider = ({ data }: { data: any }) => {
  const renderFirstSlider = (data: any, idx: number) => {
    return (
      <SwiperSlide key={idx}>
        <div className="flex flex-col items-center mt-8">
          <img
            src={data.img}
            alt={"side-img"}
            height={360}
            width={360}
            className="rounded-full overflow-hidden"
          />
          <img
            src={coma}
            alt={"coma"}
            height={17}
            width={19}
            className="mt-6 mb-4"
          />

          <p className="text-textGray text-center">{data.descr}</p>
        </div>
      </SwiperSlide>
    );
  };
  return <SecondarySlider data={data} component={renderFirstSlider} />;
};

export default SuppliersSlider;

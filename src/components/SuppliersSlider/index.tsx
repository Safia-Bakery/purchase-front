import SecondarySlider from "../SecondarySlider";

import coma from "/icons/coma.svg";

const SuppliersSlider = ({ data }: { data: any }) => {
  const renderFirstSlider = (data: any, idx: number) => {
    return (
      <div key={idx} className="flex flex-col items-center mt-8 px-2">
        <img
          src={data.img}
          alt={"side-img"}
          height={360}
          width={360}
          className="rounded-full overflow-hidden mx-auto"
        />
        <img
          src={coma}
          alt={"coma"}
          height={17}
          width={19}
          className="mt-6 mb-4 mx-auto"
        />

        <p className="text-textGray text-center">{data.descr}</p>
      </div>
    );
  };
  return <SecondarySlider data={data} component={renderFirstSlider} />;
};

export default SuppliersSlider;

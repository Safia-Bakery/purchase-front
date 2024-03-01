import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Container: FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`${className} w-full my-auto lg:p-3 p-1 2xl:max-w-[1600px] xl:max-w-[1300px] lg:max-w-[1100px]`}
    >
      {children}
    </div>
  );
};

export default Container;

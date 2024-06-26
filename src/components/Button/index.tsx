import cl from "classnames";
import styles from "./index.module.scss";
import { ReactNode } from "react";
import { BtnTypes } from "src/utils/types";

type Props = {
  green?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  btnType?: BtnTypes;
};

const Button = ({
  green,
  children,
  type = "button",
  className = "",
  btnType = BtnTypes.primary,
  ...others
}: Props) => {
  return (
    <button
      type={type}
      className={`${className} ${cl(styles.btn, styles[btnType])}`}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;

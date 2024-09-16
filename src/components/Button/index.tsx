import cl from "classnames";
import styles from "./index.module.scss";
import { ReactNode } from "react";
import { BtnTypes } from "src/utils/types";
import { Button as ChakraBtn, ButtonOptions } from "@chakra-ui/react";

interface Props extends ButtonOptions {
  green?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  btnType?: BtnTypes;
}

const Button = ({
  green,
  children,
  type = "button",
  className = "",
  btnType = BtnTypes.primary,
  ...others
}: Props) => {
  return (
    <ChakraBtn
      type={type}
      className={`${className} ${cl(styles.btn, styles[btnType])}`}
      {...others}
    >
      {children}
    </ChakraBtn>
  );
};

export default Button;

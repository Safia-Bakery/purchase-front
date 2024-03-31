import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./index.module.scss";

import addFile from "/icons/addFile.svg";

interface Props {
  onChange?: (val: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string | null;
  autoFocus?: boolean;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
  onFocus?: () => void;
  ref?: any;
  defaultValue?: any;
  onKeyDown?: KeyboardEventHandler;
}

const MainFileUpload: FC<Props> = ({
  className = "",
  placeholder = "",
  register,
  ref,
  defaultValue,
  ...others
}) => {
  return (
    <div className={`${className} ${styles.inputBox} relative`}>
      <input
        className="opacity-0 absolute inset-0"
        placeholder={placeholder || ""}
        ref={ref}
        type="file"
        defaultValue={defaultValue}
        {...register}
        {...others}
      />

      <img
        src={addFile}
        alt={"add-file"}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default MainFileUpload;

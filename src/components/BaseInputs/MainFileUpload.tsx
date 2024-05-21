import {
  ChangeEvent,
  FC,
  HTMLInputTypeAttribute,
  KeyboardEventHandler,
  useState,
} from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./index.module.scss";

import addFile from "/icons/addFile.svg";
import { useTranslation } from "react-i18next";
import fileUploadMutation from "src/hooks/mutations/fileUpload";
import Loading from "../Loader";

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
  forwardedRef?: any;
  defaultValue?: any;
  onKeyDown?: KeyboardEventHandler;
}

const MainFileUpload: FC<Props> = ({
  className = "",
  placeholder = "",
  register,
  forwardedRef,
  defaultValue,
  ...others
}) => {
  const { t } = useTranslation();
  const [uploadedFile, $uploadedFile] = useState<any>();
  const { mutate, isPending } = fileUploadMutation();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    mutate(
      { files: e.target.files },
      {
        onSuccess: (data) => {
          if (data.success) forwardedRef.current = data?.files[0].id;
          $uploadedFile(data.files?.[0]);
        },
      }
    );
  };

  return (
    <div
      className={`${className} ${styles.inputBox} flex flex-wrap relative text-sm z-30 !p-0`}
    >
      {isPending && <Loading />}
      <input
        className="opacity-0 absolute inset-0"
        type="file"
        onChange={handleChange}
        defaultValue={defaultValue}
        {...register}
        {...others}
      />
      <div className="w-full flex whitespace-pre-wrap overflow-ellipsis pr-10 pt-1 pl-1 -z-10 absolute top-1/2 text-xs lg:text-base text-textGray -translate-y-1/2">
        {!!uploadedFile
          ? uploadedFile.url.split("").slice(0, 20)
          : t(`${placeholder}`)}
      </div>
      <img
        src={addFile}
        alt={"add-file"}
        className="absolute right-2 top-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default MainFileUpload;

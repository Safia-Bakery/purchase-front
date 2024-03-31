import { ChangeEvent, FC, ReactNode, useState } from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

import arrow from "/icons/arrowBlack.svg";
import { useAppSelector } from "src/store/rootConfig";
import { langSelector } from "src/store/reducers/language";

interface Props {
  onChange?: (val: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value?: string | number;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
  values?: {
    id: number | string;
    name_uz: string;
    name_ru: string;
    status?: number;
  }[];
  children?: ReactNode;
}

const MainSelect: FC<Props> = ({ className, register, values, children }) => {
  const lang = useAppSelector(langSelector);
  const [open, $open] = useState(false);
  const [checked, $checked] = useState<number>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    $checked(Number(e.target.value));

  const toggleActive = () => $open((prev) => !prev);

  return (
    <>
      <div className="relative">
        <div
          className={cl(className, styles.inputBox, "cursor-pointer")}
          onClick={toggleActive}
        >
          <img
            src={arrow}
            alt={"open-select"}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>

        <div
          className={cl(
            "opacity-0 bg-white p-4 transition-opacity absolute top-12 shadow- z-20 flex shadow-lg flex-col gap-2 w-full rounded-xl",
            {
              ["opacity-100"]: open,
            }
          )}
        >
          {values?.map((item) => (
            <label className={styles.radio} key={item.id}>
              <input
                type="radio"
                value={item.id}
                checked={checked === item.id}
                onChange={handleChange}
                className="mr-2"
              />
              <span className={styles.checkmark}>{item[`name_${lang}`]}</span>
            </label>
          ))}
        </div>
      </div>

      {open && <div className="fixed inset-0 z-10" onClick={toggleActive} />}
    </>
  );
};

export default MainSelect;

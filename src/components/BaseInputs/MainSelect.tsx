import { ChangeEvent, FC, ReactNode, useState } from "react";
import cl from "classnames";
import styles from "./index.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

import arrow from "/icons/arrowBlack.svg";
import { useAppSelector } from "src/store/rootConfig";
import { langSelector } from "src/store/reducers/language";
import { useTranslation } from "react-i18next";

type ValuesType = {
  id: number | string;
  name_uz: string;
  name_ru: string;
  status?: number;
};

interface Props {
  onChange?: (val: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  value?: string | number;
  disabled?: boolean;
  register?: UseFormRegisterReturn;
  values?: ValuesType[];
  children?: ReactNode;
  forwardedRef?: React.RefObject<HTMLInputElement>;
}

const MainSelect: FC<Props> = ({ className, values, forwardedRef }) => {
  const { t } = useTranslation();
  const lang = useAppSelector(langSelector);
  const [open, $open] = useState(false);
  const [checked, $checked] = useState<ValuesType>();

  const handleChange = (item: ValuesType) => () => {
    $checked(item);
    toggleActive();
  };

  const toggleActive = () => $open((prev) => !prev);

  return (
    <>
      <div className="relative">
        <div
          className={cl(
            className,
            styles.inputBox,
            "cursor-pointer items-center !flex"
          )}
          onClick={toggleActive}
        >
          {checked?.[`name_${lang}`]}
          <img
            src={arrow}
            alt={"open-select"}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          />
        </div>

        <div
          className={cl(
            "opacity-0 bg-white p-4 transition-opacity absolute top-12 shadow-blockShadow flex -z-10 flex-col gap-2 w-full rounded-xl",
            {
              ["opacity-100 !z-40"]: open,
            }
          )}
        >
          {!!values?.length ? (
            values?.map((item) => (
              <label className={styles.radio} key={item.id}>
                <input
                  ref={forwardedRef}
                  type="radio"
                  value={item.id}
                  checked={checked?.id === item.id}
                  onChange={handleChange(item)}
                  className="mr-2"
                />
                <span className={styles.checkmark}>{item[`name_${lang}`]}</span>
              </label>
            ))
          ) : (
            <div className="mx-auto">{t("empty_title")}</div>
          )}
        </div>
      </div>

      {open && <div className="fixed inset-0 z-10" onClick={toggleActive} />}
    </>
  );
};

export default MainSelect;

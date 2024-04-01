import cl from "classnames";
import { useState } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  label: string;
  forwardedRef?: React.RefObject<HTMLInputElement>;
};

const MainCheckBox = ({ label, forwardedRef }: Props) => {
  const { t } = useTranslation();
  const [checked, $checked] = useState(false);

  const toggleActive = () => $checked((prev) => !prev);
  return (
    <div className="flex gap-4 items-center">
      <button type="button" onClick={toggleActive}>
        <img
          src={`/icons/${checked ? "tick" : "not_selected"}.svg`}
          alt="selected"
        />
      </button>

      <input
        type="checkbox"
        checked={checked}
        onChange={toggleActive}
        className="hidden"
        ref={forwardedRef}
      />

      <span>{t(label)}</span>
    </div>
  );
};

export default MainCheckBox;

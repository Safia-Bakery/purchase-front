import cl from "classnames";
import ups from "/icons/ups.svg";
import safiaLogo from "/images/colored-safia-logo.png";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export default function EmptyList({ className }: Props) {
  const { t } = useTranslation();
  return (
    <div
      className={cl(className, "w-full py-6 px-2 flex flex-col items-center")}
    >
      <img src={ups} alt={"ups"} />
      <img src={safiaLogo} alt={"safia-logo"} className="my-4 rounded-full" />

      <h3 className="font-bold text-xl">{t("empty_title")}</h3>
      <p className="text-textGray">{t("empty_descr")}</p>

      <Link to={"/"} className="uppercase underline mt-8 font-bold textxl">
        {t("to_main")}
      </Link>
    </div>
  );
}

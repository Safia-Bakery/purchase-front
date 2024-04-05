import BaseInput from "../BaseInputs";
import MainSelect from "../BaseInputs/MainSelect";
import useCategories from "src/hooks/useCategories";
import { useTranslation } from "react-i18next";
type Props = {
  updateref?: (val: string | number) => void;
};

const CategorySelect = ({ updateref: forwardedRef }: Props) => {
  const { data } = useCategories({ status: 1 });
  const { t } = useTranslation();

  return (
    <BaseInput label={t("order_category")}>
      <MainSelect updateRef={forwardedRef} values={data?.items} />
    </BaseInput>
  );
};

export default CategorySelect;

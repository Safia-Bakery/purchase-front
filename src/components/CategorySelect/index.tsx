import BaseInput from "../BaseInputs";
import MainSelect from "../BaseInputs/MainSelect";
import useCategories from "src/hooks/useCategories";
import { useTranslation } from "react-i18next";
type Props = {
  forwardedRef?: React.RefObject<HTMLInputElement>;
};

const CategorySelect = ({ forwardedRef }: Props) => {
  const { data } = useCategories({});
  const { t } = useTranslation();

  return (
    <BaseInput label={t("order_category")}>
      <MainSelect forwardedRef={forwardedRef} values={data?.items} />
    </BaseInput>
  );
};

export default CategorySelect;

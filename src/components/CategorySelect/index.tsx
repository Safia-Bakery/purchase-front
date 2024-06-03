import BaseInput from "../BaseInputs";
import MainSelect from "../BaseInputs/MainSelect";
import useCategories from "src/hooks/useCategories";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useAppDispatch } from "src/store/rootConfig";
import { logoutHandler } from "src/store/reducers/auth";
import Loading from "../Loader";

type Props = {
  updateref?: (val: string | number) => void;
};

const CategorySelect = ({ updateref: forwardedRef }: Props) => {
  const { data, isError, isLoading } = useCategories({ status: 1 });
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isError) {
      dispatch(logoutHandler());
      window.location.replace("/auth/login");
    }
  }, [isError]);

  if (isLoading) return <Loading />;

  return (
    <BaseInput label={t("order_category")}>
      <MainSelect updateRef={forwardedRef} values={data?.items} />
    </BaseInput>
  );
};

export default CategorySelect;

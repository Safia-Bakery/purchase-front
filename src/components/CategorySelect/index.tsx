import categoryMutation from "src/hooks/mutations/category";
import BaseInput from "../BaseInputs";
import MainSelect from "../BaseInputs/MainSelect";
import useCategories from "src/hooks/useCategories";

const CategorySelect = () => {
  const { data } = useCategories({});

  return (
    <BaseInput label={"page.order.category"}>
      <MainSelect values={data?.items} />
    </BaseInput>
  );
};

export default CategorySelect;

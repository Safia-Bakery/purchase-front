import { useQuery } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";
import { CategoryTypes } from "src/utils/types";

interface Props {
  enabled?: boolean;
  size?: number;
  page?: number;
  name?: string;
  id?: number;
  status?: number;
}

export const useCategories = ({ enabled, ...params }: Props) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: () =>
      baseApi
        .get("/category", { params })
        .then((res) => res.data as CategoryTypes),

    enabled,
    refetchOnMount: true,
  });
};
export default useCategories;

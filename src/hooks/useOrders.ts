import { useQuery } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";
import { OrdersType } from "src/utils/types";

interface Props {
  enabled?: boolean;
  size?: number;
  page?: number;
  id?: number;
  status?: number;
  user_id?: number;
}

export const useOrders = ({ enabled, ...params }: Props) => {
  return useQuery({
    queryKey: ["order", params],
    queryFn: () =>
      baseApi.get("/order", { params }).then((res) => res.data as OrdersType),

    enabled,
    refetchOnMount: true,
  });
};
export default useOrders;

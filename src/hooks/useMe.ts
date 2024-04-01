import { useQuery } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";
import { Metypes } from "src/utils/types";

interface Props {
  enabled?: boolean;
}

export const useMe = ({ enabled }: Props) => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => baseApi.get("/me").then((res) => res.data as Metypes),
    enabled,
  });
};
export default useMe;

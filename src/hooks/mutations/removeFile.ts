import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  id: number;
}

const removeFileMutation = () => {
  return useMutation({
    mutationKey: ["file_remove"],
    mutationFn: async (body: Body) => {
      const { data } = await baseApi.delete("/v1/files", {
        data: body,
      });
      return data;
    },
  });
};
export default removeFileMutation;

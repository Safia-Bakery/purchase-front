import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  files?: any;
}

const fileUploadMutation = () => {
  return useMutation({
    mutationKey: ["files_upload"],
    mutationFn: async ({ files }: Body) => {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("files", files[i]);
      }
      const { data } = await baseApi.post("/v1/files", formData);
      return data;
    },
  });
};
export default fileUploadMutation;

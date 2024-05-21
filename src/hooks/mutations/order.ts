import { useMutation } from "@tanstack/react-query";
import baseApi from "src/api/baseApi";

interface Body {
  brend?: string;
  product?: string;
  role?: string;
  sertificate?: number;
  brochure?: number;
  category_id?: string;
  safia_worker?: boolean;
  price?: number;
  product_images?: number[];
}

const orderMutation = () => {
  return useMutation({
    mutationKey: ["order"],
    mutationFn: async (body: Body) => {
      // const formData = new FormData();
      // body.product_images?.forEach((item: any) => {
      //   formData.append("product_images", item.content);
      // });
      // Object.keys(body).forEach((key: string) => {
      //   if (key !== "product_images" && body[key as keyof Body] !== undefined)
      //     formData.append(key, body[key as keyof Body] as any);
      // });
      const { data } = await baseApi.post("/order", body);
      return data;
    },
  });
};
export default orderMutation;

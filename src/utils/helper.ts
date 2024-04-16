import { QueryClient } from "@tanstack/react-query";
import { EPresetTimes } from "./types";
import useQueryString from "src/hooks/useQueryString";

export const dateTimeFormat = "DD.MM.YYYY HH:mm";
export const itemsPerPage = 50;

export const fixedString = (value: string) => {
  return value
    .split("")
    .filter((item) => {
      return [" ", "-", "(", ")", "_", "+"].indexOf(item) === -1;
    })
    .join("");
};

export const handleIdx = (index: number) => {
  const currentPage = Number(useQueryString("page")) || 1;
  if (currentPage === 1) return index + 1;
  else return index + 1 + itemsPerPage * (currentPage - 1);
};

export const is_email = (text: string) => {
  const email_detector = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  return email_detector.test(text);
};
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      gcTime: EPresetTimes.MINUTE * 10,
      staleTime: EPresetTimes.SECOND * 10,
      // refetchOnReconnect: true,
    },
  },
});
export const Status = {
  0: "new",
};

export const safiaEmail = "info@safiabakery.uz";
export const safiaFacebook = "https://www.facebook.com/Safia.uz";
export const safiaTgBot = "https://t.me/Safiabakery_uzbot";
export const safiaInsta = "https://www.instagram.com/safia_uz/";

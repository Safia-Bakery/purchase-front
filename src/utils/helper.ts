import { QueryClient } from "@tanstack/react-query";
import { EPresetTimes } from "./types";

export const fixedString = (value: string) => {
  return value
    .split("")
    .filter((item) => {
      return [" ", "-", "(", ")", "_"].indexOf(item) === -1;
    })
    .join("");
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

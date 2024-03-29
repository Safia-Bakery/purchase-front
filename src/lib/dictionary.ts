import "server-only";
import type { Locale } from "root/i18n.config";

const dictionaries = {
  ru: () => import("@/dictionaries/ru.json").then((module) => module.default),
  uz: () => import("@/dictionaries/uz.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

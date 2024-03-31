export enum Language {
  ru = "ru",
  uz = "uz",
}
export enum BtnTypes {
  primary = "primary",
  white = "white",
}
export interface CategoryType {
  id: number;
  name_uz: string;
  name_ru: string;
  status: number;
  created_at: string;
  updated_at: string;
}

export interface CategoryTypes {
  items: CategoryType[];
  total: number;
  page: number;
  size: number;
  pages: number;
}
export enum EPresetTimes {
  SECOND = 1000,
  MINUTE = SECOND * 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  WEEK = DAY * 7,
  TEN_DAYS = DAY * 10,
}

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

interface BasePaginate {
  total: number;
  page: number;
  size: number;
  pages: number;
}

export interface CategoryTypes extends BasePaginate {
  items: CategoryType[];
}
export enum EPresetTimes {
  SECOND = 1000,
  MINUTE = SECOND * 60,
  HOUR = MINUTE * 60,
  DAY = HOUR * 24,
  WEEK = DAY * 7,
  TEN_DAYS = DAY * 10,
}

export interface OrderType {
  id: number;
  user_id: number;
  status: number;
  brend: string;
  product: string;
  role: string;
  sertificate: string;
  brochure: string;
  category_id: number;
  category: CategoryType;
  safia_worker: true;
  created_at: string;
  updated_at: string;
  user: Metypes;
}
export interface OrdersType extends BasePaginate {
  items: OrderType[];
}
export interface Metypes {
  id: number;
  address: string;
  name: string;
  inn: string;
  email: string;
  company_name: string;
  phone: string;
  status: number;
  created_at: string;
  updated_at: string;
}

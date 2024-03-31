import axios, { AxiosInstance, AxiosResponse } from "axios";

export const baseURL = "https://api.purchase.safiabakery.uz";

const baseApi: AxiosInstance = axios.create({
  baseURL,
});

const invalidarr = ["undefined", "null", ""];

baseApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token")?.toString();

    if (!!token) {
      if (config.headers) config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

baseApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      logoutUser();
    }
    return Promise.reject(error);
  }
);

function logoutUser() {
  localStorage.removeItem("token");
  // window.location.replace("/auth/login");
}

export default baseApi;

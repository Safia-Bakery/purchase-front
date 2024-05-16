import axios, { AxiosInstance, AxiosResponse } from "axios";
import { logoutHandler } from "src/store/reducers/auth";
import { store } from "src/store/rootConfig";

export const baseURL = "https://backend.purchase.safiabakery.uz";

const baseApi: AxiosInstance = axios.create({
  baseURL,
});

const logoutStatus: any = {
  403: true,
  401: true,
};

baseApi.interceptors.request.use(
  (config) => {
    const token = store.getState()?.auth.token;

    if (!!token && config.headers)
      config.headers.Authorization = `Bearer ${token}`;

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
    if (logoutStatus[error?.response?.status]) {
      store?.dispatch(logoutHandler());
    }
    return Promise.reject(error);
  }
);

export default baseApi;

import axios from "axios";

export const get = <T>(path: string) => {
  return axios.get<T>(`/api/${path}`);
};

export const post = <T>(path: string, payload: any) => {
  return axios.post<T>(`/api/${path}`, payload);
};

export const put = <T>(path: string, payload: any) => {
  return axios.put<T>(`/api/${path}`, payload);
};

export const del = <T>(path: string) => {
  return axios.delete<T>(`/api/${path}`);
};

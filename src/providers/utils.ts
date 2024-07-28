import axios from "axios";

export const get = <T>(path: string) => {
  return axios.get<T>(`${"http://localhost:8080"}/${path}`);
};

export const post = <T>(path: string, payload: any) => {
  return axios.post<T>(`${"http://localhost:8080"}/${path}`, payload);
};

export const put = <T>(path: string, payload: any) => {
  return axios.put<T>(`${"http://localhost:8080"}/${path}`, payload);
};

export const del = <T>(path: string) => {
  return axios.delete<T>(`${"http://localhost:8080"}/${path}`);
};

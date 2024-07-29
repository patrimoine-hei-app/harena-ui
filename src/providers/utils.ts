import axios from "axios";

export const get = <T>(path: string) => {
  return axios.get<T>(`${"https://xev6yxxrvk.execute-api.eu-west-3.amazonaws.com/Prod"}/${path}`);
};

export const post = <T>(path: string, payload: any) => {
  return axios.post<T>(`${"https://xev6yxxrvk.execute-api.eu-west-3.amazonaws.com/Prod"}/${path}`, payload);
};

export const put = <T>(path: string, payload: any) => {
  return axios.put<T>(`${"https://xev6yxxrvk.execute-api.eu-west-3.amazonaws.com/Prod"}/${path}`, payload);
};

export const del = <T>(path: string) => {
  return axios.delete<T>(`${"https://xev6yxxrvk.execute-api.eu-west-3.amazonaws.com/Prod"}/${path}`);
};

import { CustomDataprovider as ICustomDataprovider } from "./type";
import { get, post, put, del } from "./utils";

type Patrimoine = {
  id: string;
  name: string;
};

export const patrimoineProvider: ICustomDataprovider<Patrimoine> = {
  getList: () => {
    return get<Patrimoine[]>("patrimoines").then((response) => response.data);
  },
  getOne: (id) => {
    return get<Patrimoine>(`patrimoines/${id}`).then(
      (response) => response.data
    );
  },
  create: (payload) => {
    return post<Patrimoine>("patrimoines", payload).then(
      (response) => response.data
    );
  },
  update: (payload) => {
    return put<Patrimoine>(`patrimoines/${payload.id}`, payload).then(
      (response) => response.data
    );
  },
  delete: (id) => {
    return del<Patrimoine>(`patrimoines/${id}`).then(
      (response) => response.data
    );
  },
};

export type CustomDataprovider<T> = {
  getList: (
    page: number,
    pageSize: number,
    filter: any,
    sort: any,
    meta: any
  ) => Promise<T[]>;
  getOne: (id: string, meta: any) => Promise<T>;
  create: (payload: T | any, meta: any) => Promise<T>;
  update: (payload: T | any, meta: any) => Promise<T>;
  delete: (id: string, meta: any) => Promise<T>;
};

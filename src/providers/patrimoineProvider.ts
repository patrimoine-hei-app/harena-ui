import { CustomDataprovider } from "./type";
import { get, post } from "./utils";

type Patrimoine = {
  id: string;
  name: string;
};

export const patrimoineProvider: CustomDataprovider<Patrimoine> = {
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
    return post<Patrimoine>("patrimoines", payload).then(
      (response) => response.data
    );
  },
  delete: (id) => {
    return get<Patrimoine>(`patrimoines/${id}`).then(
      (response) => response.data
    );
  },
};

import { CustomDataprovider } from "./type";
import { get, post, put, del } from "./utils";

type Possession = {
  id: string;
  nom: string;
  type: string;
  valeur_comptable: BigInteger;
};

export const possessionProvider: CustomDataprovider<Possession> = {
  getList: () => {
    return get<Possession[]>("possessions").then((response) => response.data);
  },
  getOne: (id) => {
    return get<Possession>(`possessions/${id}`).then(
      (response) => response.data
    );
  },
  create: (payload) => {
    return post<Possession>("possessions", payload).then(
      (response) => response.data
    );
  },
  update: (payload) => {
    return put<Possession>("possessions", payload).then(
      (response) => response.data
    );
  },
  delete: (id) => {
    return del<Possession>(`possessions/${id}`).then(
      (response) => response.data
    );
  },
};

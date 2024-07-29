import { CustomDataprovider as ICustomDataprovider } from "./type";
import { get, post, put, del } from "./utils";

// Fonction pour générer un id unique basé sur le contenu
const generateId = (item: any) => {
  return `${item.nom}-${item.possesseur.nom}-${item.t}`;
};

type Patrimoine = {
  id?: string;
  nom: string;
  possesseur: {
    nom: string;
  };
  t: string;
  valeur_comptable: number;
};

export const patrimoineProvider: ICustomDataprovider<Patrimoine> = {
  getList: () => {
    return get<{ data: Patrimoine[] }>("patrimoines").then((response) => 
      response.data.data.map(item => ({ ...item, id: generateId(item) }))
    );
  },
  getOne: (id) => {
    return get<{ data: Patrimoine }>(`patrimoines/${id}`).then((response) => ({
      ...response.data,
      id: generateId(response.data)
    }));
  },
  create: (payload) => {
    return post<{ data: Patrimoine }>("patrimoines", payload).then((response) => ({
      ...response.data,
      id: generateId(response.data)
    }));
  },
  update: (payload) => {
    return put<{ data: Patrimoine }>(`patrimoines/${payload.id}`, payload).then((response) => ({
      ...response.data,
      id: generateId(response.data)
    }));
  },
  delete: (id) => {
    return del<{ data: Patrimoine }>(`patrimoines/${id}`).then((response) => ({
      ...response.data,
      id: generateId(response.data)
    }));
  },
};
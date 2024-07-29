import { CustomDataprovider as ICustomDataprovider } from "./type";
import { get } from "./utils";

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
      response.data.data.map((item) => ({ ...item, id: generateId(item) }))
    );
  },
  getOne: () => {
    return Promise.reject(new Error("Method not implemented."));
  },
  create: () => {
    return Promise.reject(new Error("Method not implemented."));
  },
  update: () => {
    return Promise.reject(new Error("Method not implemented."));
  },
  delete: () => {
    return Promise.reject(new Error("Method not implemented."));
  },
};

import { CustomDataprovider as ICustomDataprovider } from "./type";
import { get, post, put, del } from "./utils";

type ProjectionFuture = {
  nom_argent: string;
  date: string;
  valeur_argent: number;
  flux_argents: {
    t: string;
    nom: string;
    valeur_comptable: number;
    devise: {
      nom: string;
      code: string;
    };
    argent: {
      t: string;
      nom: string;
      valeur_comptable: number;
      devise: {
        nom: string;
        code: string;
      };
      date_d_ouverture: string;
      type: string;
    };
    debut: string;
    fin: string;
    flux_mensuel: number;
    date_d_operation: number;
  }[];
};

export const projectionFutureProvider: ICustomDataprovider<ProjectionFuture> = {
  getList: () => {
    return get<ProjectionFuture[]>("projection_futures").then((response) => response.data);
  },
  getOne: (id) => {
    return get<ProjectionFuture>(`projection_futures/${id}`).then(
      (response) => response.data
    );
  },
  create: (payload) => {
    return post<ProjectionFuture>("projection_futures", payload).then(
      (response) => response.data
    );
  },
  update: (payload) => {
    return put<ProjectionFuture>(`projection_futures/${payload.id}`, payload).then(
      (response) => response.data
    );
  },
  delete: (id) => {
    return del<ProjectionFuture>(`projection_futures/${id}`).then(
      (response) => response.data
    );
  },
};
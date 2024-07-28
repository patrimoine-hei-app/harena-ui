import React from "react";
import { List, Datagrid, TextField, NumberField, DateField } from "react-admin";

export const ProjectionFutureList: React.FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nom_argent" label="Nom Argent" />
      <DateField source="date" label="Date" />
      <NumberField source="valeur_argent" label="Valeur Argent" />
      <DateField source="flux_argents[0].t" label="Flux Date" />
      <TextField source="flux_argents[0].nom" label="Flux Nom" />
      <NumberField
        source="flux_argents[0].valeur_comptable"
        label="Flux Valeur Comptable"
      />
      <TextField source="flux_argents[0].devise.nom" label="Flux Devise Nom" />
      <TextField
        source="flux_argents[0].devise.code"
        label="Flux Devise Code"
      />
    </Datagrid>
  </List>
);

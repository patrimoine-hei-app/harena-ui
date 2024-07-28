import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
} from "react-admin";

export const ProjectionFutureEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nom_argent" label="Nom Argent" />
      <DateInput source="date" label="Date" />
      <NumberInput source="valeur_argent" label="Valeur Argent" />
      <DateInput source="flux_argents[0].t" label="Flux Date" />
      <TextInput source="flux_argents[0].nom" label="Flux Nom" />
      <NumberInput
        source="flux_argents[0].valeur_comptable"
        label="Flux Valeur Comptable"
      />
      <TextInput source="flux_argents[0].devise.nom" label="Flux Devise Nom" />
      <TextInput
        source="flux_argents[0].devise.code"
        label="Flux Devise Code"
      />
    </SimpleForm>
  </Edit>
);

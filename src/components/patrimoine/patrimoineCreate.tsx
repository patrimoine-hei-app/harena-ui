import * as React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
} from "react-admin";

export const PatrimoineCreate: React.FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="nom" />
      <TextInput source="possesseur.nom" label="Nom du Possesseur" />
      <DateInput source="t" label="Date" />
      <NumberInput source="valeur_comptable" label="Valeur Comptable" />
    </SimpleForm>
  </Create>
);

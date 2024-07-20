import * as React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export const PatrimoineCreate: React.FC = () => (
  <Create>
    <SimpleForm>
      <TextInput source="nom" />
      <TextInput source="possesseur.nom" />
      <DateInput source="temps" />
      <TextInput source="Valeur Comptable" type="number" />
    </SimpleForm>
  </Create>
);

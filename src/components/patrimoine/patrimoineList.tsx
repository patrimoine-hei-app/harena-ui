import { List, Datagrid, TextField, DateField } from "react-admin";

export const PatrimoineList: React.FC = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nom" />
      <TextField source="possesseur.nom" label="Possesseur" />
      <DateField source="t" label="Date" />
      <TextField source="valeur_comptable" label="Valeur Comptable" />
    </Datagrid>
  </List>
);

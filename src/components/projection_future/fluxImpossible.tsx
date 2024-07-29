import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  Filter,
  TextInput,
  DateInput,
} from "react-admin";

const FluxImpossibleFilter = (props: any) => (
  <Filter {...props}>
    <TextInput label="Nom du patrimoine" source="nom_patrimoine" alwaysOn />
    <DateInput label="Début" source="debut" />
    <DateInput label="Fin" source="fin" />
  </Filter>
);

const FluxImpossibleList = (props: any) => (
  <List
    {...props}
    filters={<FluxImpossibleFilter />}
    perPage={25}
    sort={{ field: "date", order: "DESC" }}
  >
    <Datagrid>
      <TextField source="nom_argent" label="Nom de l'argent" />
      <DateField source="date" label="Date" />
      <NumberField source="valeur_argent" label="Valeur" />
      <TextField
        source="flux_argents[0].valeur_comptable"
        label="Valeur comptable de Flux Argent"
      />
    </Datagrid>
  </List>
);

export default FluxImpossibleList;

import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const PatrimoineEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="nom" />
      <SelectInput
        source="type"
        choices={[
          { id: "ARGENT", name: "Argent" },
          { id: "MATERIEL", name: "Matériel" },
          { id: "FLUXARGENT", name: "Flux d'Argent" },
        ]}
      />
      <NumberInput source="valeur_comptable" />
    </SimpleForm>
  </Edit>
);

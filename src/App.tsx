import { Admin, Resource } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import { PatrimoineCreate } from "./components/patrimoine/patrimoineCreate";
import { PatrimoineList } from "./components/patrimoine/patrimoineList";
import { PatrimoineEdit } from "./components/patrimoine/patrimoineEdit";
import dataProvider from "./providers/dataProvider";
import ChartPie from "./components/ChartPie";
import ChartBar from "./components/ChartBar";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <div style={{ display: "flex", flexDirection: "row", gap: 8 }}>
      <ChartBar />
      <ChartPie />
    </div>
  </div>
);

const App = () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource
      name="Patrimoine"
      list={PatrimoineList}
      create={PatrimoineCreate}
      edit={PatrimoineEdit}
      icon={UserIcon}
    />
  </Admin>
);

export default App;

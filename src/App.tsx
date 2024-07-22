import { Admin, Resource } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import { PatrimoineCreate } from "./components/patrimoine/patrimoineCreate";
import { PatrimoineList } from "./components/patrimoine/patrimoineList";
import { PatrimoineEdit } from "./components/patrimoine/patrimoineEdit";
import InventoryIcon from '@mui/icons-material/Inventory';
import  PossessionList  from './components/possession/possessionList';
import  PossessionCreate from './components/possession/possessionCreate';
import  PossessionEdit  from './components/possession/possessionEdit';
import dataProvider from "./providers/dataProvider";
import ChartBar from "./components/chart/ChartBar";
import ChartPie from "./components/chart/ChartPie";

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
    <Resource
      name="Possessions"
      list={PossessionList}
      create={PossessionCreate}
      edit={PossessionEdit}
      icon={InventoryIcon}/>
  </Admin>
);

export default App;

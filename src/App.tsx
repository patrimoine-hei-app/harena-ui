import { Admin, Resource } from "react-admin";
import UserIcon from "@mui/icons-material/Group";
import { PatrimoineCreate } from "./components/patrimoine/patrimoineCreate";
import { PatrimoineList } from "./components/patrimoine/patrimoineList";
import { PatrimoineEdit } from "./components/patrimoine/patrimoineEdit";
import dataProvider from "./providers/dataProvider";
import MyChart from "./components/Chart";

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <MyChart />
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

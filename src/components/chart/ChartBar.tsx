import { Chart } from "react-google-charts";
import { data, options } from "./chartConfig";

export default function ChartBar() {
  return (
    <Chart
      chartType="AreaChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

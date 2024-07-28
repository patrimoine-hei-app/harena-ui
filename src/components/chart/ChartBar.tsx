import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

export default function ChartBar() {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/patrimoines")
      .then((response) => {
        const data = [["Nom", "Valeur Comptable"]];
        response.data.forEach(
          (item: { nom: string; valeur_comptable: number }) => {
            data.push([item.nom, item.valeur_comptable.toString()]);
          }
        );
        setChartData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const options = {
    isStacked: true,
    height: 300,
    legend: { position: "top", maxLines: 3 },
    vAxis: { minValue: 0 },
  };

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />
  );
}

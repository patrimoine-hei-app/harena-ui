import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const ChartPie = () => {
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
    title: "Répartition des patrimoines",
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />
  );
};

export default ChartPie;

import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import axios from "axios";

const ChartPie = () => {
  const [chartData, setChartData] = useState<(string | number)[][]>([]);

  useEffect(() => {
    axios
      .get(
        "https://xev6yxxrvk.execute-api.eu-west-3.amazonaws.com/Prod/patrimoines"
      )
      .then((response) => {
        const data: (string | number)[][] = [["Nom", "Valeur Comptable"]];
        response.data.data.forEach(
          (item: { nom: string; valeurComptable: number }) => {
            data.push([item.nom, item.valeurComptable]);
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

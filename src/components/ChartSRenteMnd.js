/* import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = [
  "23.01.2020",
  "13.03.2020",
  "20.03.2020",
  "07.05.2020",
  "18.06.2020",
  "20.08.2020",
  "24.09.2020",
  "05.11.2020",
  "17.12.2020",
  "21.01.2021",
  "18.03.2021",
  "06.05.2021",
  "17.06.2021",
  "19.08.2021",
  "23.09.2021",
  "04.11.2021",
  "16.12.2021",
  "20.01.2022",
  "24.03.2022",
  "05.05.2022",
  "23.06.2022",
  "18.08.2022",
  "22.09.2022",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Styringsrenten",
      data: [
        1.5, 1.0, 0.25, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
        0.25, 0.25, 0.5, 0.5, 0.75, 0.75, 1.25, 1.75, 2.25,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function ChartSRenteMnd() {
  return <Line options={options} data={data} />;
}
 */
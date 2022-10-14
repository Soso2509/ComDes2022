import React from "react";

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
      text: "Styringsrentens årsgjennomsnitt siden 2008",
    },
  },
};

const labels = [
  "2008",
  "2009",
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Styringsrenten",
      data: [
        5.32, 1.75, 1.92, 2.14, 1.55, 1.5, 1.49, 1.05, 0.55, 0.5, 0.57, 1.15,
        0.36, 0.08,
      ],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export function ChartSRenteÅr() {
  return <Line options={options} data={data} />;
}

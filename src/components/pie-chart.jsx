import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { generateRandomPercentages } from "./info-perc";

const percentages = generateRandomPercentages()

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels }) => {
  if (!Array.isArray(percentages)) {
    console.error("PieChart expected an array but got:", percentages);
    return null;
  }

  const data = {
    labels: labels || percentages.map((_, i) => `Segment ${i + 1}`),
    datasets: [
      {
        data: percentages,
        backgroundColor: [
          "#4caf50",
          "#f44336",
          "#2196f3",
          "#ffeb3b",
          "#9c27b0",
          "#00bcd4",
          "#ff9800",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
};

export default PieChart;

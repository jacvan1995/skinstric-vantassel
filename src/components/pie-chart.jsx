import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { generateRandomPercentages } from "./info-perc";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, percentages }) => {
  if (!Array.isArray(labels) || !Array.isArray(percentages)) {
    console.error("PieChart expected arrays for labels and percentages");
    return null;
  }

  const data = {
    labels,
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

  return (
    <div className="pie-chart-container">
      <Pie data={data} />
    </div>
  );
};

export default PieChart;

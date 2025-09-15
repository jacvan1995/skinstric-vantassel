import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ percentages }) => {
  const data = {
    labels: percentages.map((_, i) => `Segment ${i + 1}`),
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
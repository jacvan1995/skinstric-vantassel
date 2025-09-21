import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ labels, percentages, showLabels = true }) => {
  if (!Array.isArray(labels) || !Array.isArray(percentages)) {
    console.error("PieChart expected arrays for labels and percentages");
    return null;
  }

  const data = {
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

  const options = {
    plugins: {
      legend: {
        display: showLabels,
      },
      tooltip: {
        enabled: showLabels,
      },
      datalabels: {
        display: false
      }
    },
  };

  return (
    <div className="pie-chart-container">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;

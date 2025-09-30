import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({
  labels = [],
  percentages = [],
  showLabels = false,
}) => {
  if (!Array.isArray(labels) || !Array.isArray(percentages)) {
    console.error("PieChart expected arrays for labels and percentages");
    return null;
  }

  const isSingleSelection = percentages.length === 1;

  const data = {
    labels,
    datasets: [
      {
        data: isSingleSelection
          ? [percentages[0], 100 - percentages[0]]
          : percentages,
        backgroundColor: isSingleSelection
          ? ["#000", "transparent"]
          : Array(percentages.length).fill("#000"),
        borderColor: isSingleSelection ? "transparent" : "#fff",
        borderWidth: isSingleSelection ? 0 : 2,
        cutout: "95%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: showLabels },
      tooltip: { enabled: showLabels },
    },
    animation: {
      animateRotate: true,
      duration: 800,
    },
  };

  return (
    <div className="pie-chart-container">
      <Doughnut data={data} options={options} />
      {isSingleSelection && (
        <div className="chart-center">{percentages[0]}%</div>
      )}
    </div>
  );
};

export default PieChart;
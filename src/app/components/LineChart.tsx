import React from "react";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

function LineChart({ chartData, options }: any) {
  return <Line data={chartData} options={options} />;
}

export default LineChart;

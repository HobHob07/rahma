import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import {CategoryScale} from 'chart.js'; 
Chart.register(CategoryScale);

function PieChart({ chartData }: any) {
  return <Pie data={chartData} />;
}

export default PieChart;

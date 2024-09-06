"use client";

import React, { useRef, useEffect, useState } from "react";
import AnnotationPlugin from "chartjs-plugin-annotation";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { average, max, min } from "@/utils/Maths";
import { sampleStockData } from "../Summary/data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  AnnotationPlugin
);

export default function Graph({ dataset, setDataset, ...props }) {
  const ref = useRef(null);

  const data = {
    labels: [...Object.keys(sampleStockData).slice(0, 30).map((i) =>
      new Date(i).toLocaleDateString(undefined, { month: "short", day: "numeric" })
    ), "", "", "", "", "", "", ""],
    datasets: [
      dataset,
      {
        label: "dw",
        data: dataset.data.map((i) => average(dataset.data),),
        fill: false,
        borderColor: "white",
        pointRadius: 0,
        borderWidth: 2,
        borderDash: [10, 20]
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: "category",
        grid: {
          display: false,
          drawBorder: false, // Remove bottom border
        },
        ticks: {
          display: false, // Hide x-axis labels
        },
      },
      y: {
        beginAtZero: false,
        min: min(dataset.data),
        max: max(dataset.data) + 5,
        grid: {
          display: false,
          drawBorder: false, // Remove left border
        },
        ticks: {
          display: false, // Hide y-axis labels
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };


  return (
    <div {...props} className={`${props.className} w-1/3 h-[300px] relative`}>
      <span className="font-extrabold text-[#34C759] absolute ml-10 mt-10">+0.33%</span>
      <Line ref={ref} data={data} options={options} />
    </div>
  );
}

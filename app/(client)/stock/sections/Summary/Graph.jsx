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
import { sampleStockData } from "./data";
import { average, max, min } from "@/utils/Maths";

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

export default function Graph(props) {
  const ref = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.ctx;
      if (ctx) {
        const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
        gradientFill.addColorStop(0, "#58B9FF");
        gradientFill.addColorStop(0.8, "#05050530");
        setGradient(gradientFill);
      }
    }
  }, [ref]);

  const data = {
    labels: [...Object.keys(sampleStockData).map((i) =>
      new Date(i).toLocaleDateString(undefined, { month: "short", day: "numeric" })
    ), "", "", "", "", "", "", ""],
    datasets: [
      {
        label: "Buy",
        data: Object.keys(sampleStockData).map((key) => average(Object.keys(sampleStockData).map((key) => sampleStockData[key]["2. high"]))),
        fill: false,
        borderColor: "#1DF81F",
        pointRadius: 1,
        borderWidth: 2,
      },
      {
        label: "Target",
        data: Object.keys(sampleStockData).map((key) => sampleStockData[key]["3. low"]),
        fill: false,
        borderColor: "#F63C6B",
        pointRadius: 1,
        borderWidth: 2,
      },
      {
        label: "Sales",
        data: Object.keys(sampleStockData).map((key) => sampleStockData[key]["1. open"]),
        fill: true,
        borderColor: "#58B9FF",
        backgroundColor: gradient,
        tension: 0.1,
        pointRadius: 1,
        borderWidth: 2,
      },
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
        },
      },
      y: {
        beginAtZero: false,
        min: min(data.datasets[data.datasets.length - 1].data) - 5,
        max: max(data.datasets[data.datasets.length - 1].data) + 5,
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
      },
      tooltip: {
        enabled: true,
      },
      annotation: {
        annotations: data.datasets.map((dataset, index) => {
          const lastDataIndex = dataset.data.length - 1;
          return {
            type: "label",
            content: `${dataset.data[lastDataIndex]}`,
            position: {
              x: "end",
              y: "start",
            },
            xValue: lastDataIndex,
            yValue: dataset.data[lastDataIndex],
            backgroundColor: dataset.label === "Buy" ? "#1DF81F" : dataset.label === "Target" ? "#F63C6B" : dataset.label === "Sales" ? "#58B9FF" : "",
            color: "black",
            borderRadius: 5,
            font: {
              size: 12,
              weight: "bold",
            },
            yAdjust: -10 * (index + 1),
            xAdjust: 50,
          };
        }),
      },
    },
  };

  return (
    <div {...props} className={`${props.className} w-full h-[450px]`}>
      <Line ref={ref} data={data} options={options} />
    </div>
  );
}

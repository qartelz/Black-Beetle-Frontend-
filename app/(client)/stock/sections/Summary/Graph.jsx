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
import { sampleStockData } from "./data";  // Sample stock data

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

  // Preparing dataset with color-coded segments based on movement
  const processedData = Object.keys(sampleStockData).map((key) => {
    const closePrice = sampleStockData[key]["4. close"];
    return {
      time: new Date(key).toLocaleDateString(undefined, { month: "short", day: "numeric" }),
      price: closePrice,
    };
  });

  // Separating data into two segments: increasing and decreasing
  const data = {
    labels: processedData.map(d => d.time),
    datasets: [
      {
        label: "Stock Movement",
        data: processedData.map(d => d.price),
        segment: {
          borderColor: (ctx) => {
            const index = ctx.p1DataIndex;
            if (index === 0) return "#1DF81F"; // First segment as green by default
            const prevPrice = processedData[index - 1].price;
            const currentPrice = processedData[index].price;
            return currentPrice >= prevPrice ? "#1DF81F" : "#F63C6B";  // Green for upward, red for downward
          },
          borderWidth: 2,
        },
        fill: false,
        pointRadius: 10,
        tension: 0.1,
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
    },
  };

  return (
    <div {...props} className={`${props.className} w-full h-[450px]`}>
      <Line ref={ref} data={data} options={options} />
    </div>
  );
}

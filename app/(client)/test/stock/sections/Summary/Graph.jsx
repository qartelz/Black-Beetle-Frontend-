"use client";

import React, { useRef, useEffect, useState } from 'react';
import AnnotationPlugin from "chartjs-plugin-annotation";

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler, AnnotationPlugin);

export default function Graph(props) {
  const ref = useRef(null);
  const [gradient, setGradient] = useState(null);

  useEffect(() => {
    if (ref.current) {
      const ctx = ref.current.ctx; // Access the internal chart instance context
      if (ctx) {
        const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
        gradientFill.addColorStop(0, '#58B9FF');
        gradientFill.addColorStop(0.5, '#05050530');
        setGradient(gradientFill);
      }
    }
  }, [ref.current]); // Dependency array includes ref to ensure the effect runs once the ref is assigned

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: '#58B9FF',
        backgroundColor: gradient,
        tension: 0.1,
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Target Line 1',
        data: [70, 70, 70, 70, 70, 70, 70],
        fill: false,
        borderColor: 'rgba(255,99,132,1)',
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Target Line 2',
        data: [50, 50, 50, 50, 50, 50, 50],
        fill: false,
        borderColor: 'rgba(54,162,235,1)',
        pointRadius: 0,
        borderWidth: 2,
      },
      {
        label: 'Target Line 3',
        data: [30, 30, 30, 30, 30, 30, 30],
        fill: false,
        borderColor: 'rgba(255,206,86,1)',
        pointRadius: 0,
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <div {...props} className={`${props.className} w-full h-[250px]`}>
      <Line ref={ref} data={data} options={options} />
    </div>
  );
}

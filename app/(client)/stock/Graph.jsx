"use client";

import Chart from "react-google-charts";

export const data = [
    ["Year", "Sales", "Expenses", "Profit", { role: "annotation" }, { role: "annotation" }, { role: "annotation" }],
    ["2004", 1000, 400, 600, null, null, null],
    ["2005", 1170, 460, 710, null, null, null],
    ["2006", 660, 1120, -460, null, null, null],
    ["2007", 1030, 540, 490, null, null, null],
    ["2008", 800, 600, 200, null, null, null],
    ["2009", 1200, 300, 900, null, null, null],
    ["2010", 900, 700, 200, null, null, null],
    ["2011", 1500, 200, 1300, null, null, null],
    ["2012", 600, 1000, -400, null, null, null],
    ["2013", 1100, 500, 600, null, null, null],
    ["2014", 700, 900, -200, null, null, null],
    ["2015", 1300, 400, 900, null, null, null],
    ["2016", 1000, 800, 200, null, null, null],
    ["2017", 800, 1100, -300, null, null, null],
    ["2018", 1200, 300, 900, "1200", "300", "900"]
];

export const options = {
    title: "Company Performance",
    curveType: "function",
    legend: {
        position: "bottom",
    },
    backgroundColor: "transparent", // Set background to transparent
    chartArea: {
        width: "100%",
        height: "100%",
    },
    hAxis: {
        title: "Year",
        gridlines: { color: "transparent" }, // Remove horizontal grid lines
        baselineColor: "transparent", // Remove axis line
    },
    vAxis: {
        title: "Value",
        gridlines: { color: "transparent" }, // Remove vertical grid lines
        baselineColor: "transparent", // Remove axis line
    },
    annotations: {
        alwaysOutside: true,
        textStyle: {
            color: "#999999"
        },

    },
};

export default function Graph(props) {
    return <div {...props} className={`${props.className}`}>
        <Chart
            chartType="LineChart"
            width="100%"
            height="200px"
            data={data}
            options={options}
        />
    </div>
}
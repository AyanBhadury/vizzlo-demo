import React, { useState } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { chartdata } from "../assets/data";

Charts(FusionCharts);
FusionTheme(FusionCharts);
FusionCharts.options.creditLabel = false;
const chartConfigs = {
  type: "column2d",
  width: 600,
  height: 400,
  dataFormat: "json",
  dataSource: chartdata,
};

function BarChart() {
  const [initalData, setinitalData] = useState(chartdata);
  const [chart, setchart] = useState({});

  function renderComplete(chart) {
    setchart(chart);
  }

  const barChart = (e) => {
    // console.log(chart)
    chart["chartType"]("column2d");
  };
  const pieChart = (e) => {
    // console.log(chart)
    chart["chartType"]("pie2d");
  };

  function getRandomNumber() {
    var max = 290,
      min = 30;
    return Math.round((max - min) * Math.random() + min);
  }

  const addPlots = (e) => {
    let obj = {
      label: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
      value: getRandomNumber(),
    };

    chartdata.data.push(obj);
    const x = { ...chartdata };
    chart["setJSONData"](x);
  };

  const randomize = (e) => {
    const data = chartdata.data.sort(function (a, b) {
      return Math.random() - 0.5;
    });
    const x = { ...chartdata, data };
    chart["setJSONData"](x);
  };

  const reset = (e) => {
    console.log(chart);
    chart["setJSONData"](chart["args"].dataSource);
  };

  return (
    <>
      <ReactFC {...chartConfigs} onRender={renderComplete} />
      <button onClick={barChart}>Bar Chart</button>
      <button onClick={pieChart}>PieChart Chart</button>
      <button onClick={addPlots}>Add Plots</button>
      <button onClick={randomize}>Shuffle Plots</button>
      <button onClick={reset}>Reset Plots</button>
    </>
  );
}

export default BarChart;

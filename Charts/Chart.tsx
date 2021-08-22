import React, { useState } from "react";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ExcelExport from "fusioncharts/fusioncharts.excelexport";
import { chartdata } from "../assets/data";
import { ChartConstructor } from "./Interfaces/ChartConstructor";
//passes the dependency of the charts
Charts(FusionCharts);
FusionTheme(FusionCharts);
ExcelExport(FusionCharts);

FusionCharts.options.creditLabel = false;

const chartConfigs: ChartConstructor = {
  type: "column2d",
  width: 600,
  height: 377,
  dataFormat: "json",
  dataSource: chartdata,
};

function Chart() {
  const [initalData, setinitalData] = useState(chartdata);
  const [chart, setchart] = useState({});
  const [plotBorder, setplotBorder] = useState(false);

  function renderComplete(chart) {
    setchart(chart);
  }

  //sets the chart tyepe to bar
  const barChart = (e) => {
    // console.log(chart)
    chart["chartType"]("column2d");
  };

  //sets the chart type to pie
  const pieChart = (e) => {
    // console.log(chart)
    chart["chartType"]("pie2d");
  };

  //generates a random number for the plots
  function getRandomNumber() {
    var max = 290,
      min = 30;
    return Math.round((max - min) * Math.random() + min);
  }

  //toggles the showborder prop
  const showBorder = (e) => {
    // @ts-ignore
    setplotBorder(!plotBorder);
    chart["setChartAttribute"]("showPlotBorder", plotBorder);
  };

  //adds the data plot to the chart
  const addPlots = (e) => {
    let obj = {
      label: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
      value: getRandomNumber(),
    };

    chartdata.data.push(obj);
    const x = { ...chartdata };
    chart["setJSONData"](x);
  };

  //shuffles the plots randomly
  const randomize = (e) => {
    const data = chartdata.data.sort(function (a, b) {
      return Math.random() - 0.5;
    });
    const x = { ...chartdata, data };
    chart["setJSONData"](x);
  };

  //resets all the filters
  const reset = (e) => {
    console.log(chart);
    chart["setJSONData"](chart["args"].dataSource);
  };

  return (
    <>
      <ReactFC {...chartConfigs} onRender={renderComplete} />
      <button onClick={barChart}>BarChart</button>
      <button onClick={pieChart}>PieChart</button>
      <button onClick={showBorder}>Plot Border</button>
      <button onClick={addPlots}>Add Plots</button>
      <button onClick={randomize}>Shuffle Plots</button>
      <button onClick={reset}>Reset Plots</button>
    </>
  );
}

export default Chart;

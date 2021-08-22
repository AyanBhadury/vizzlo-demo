import React from "react";
import ReactDOM from "react-dom";
import Chart from "./Charts/Chart";
//import TestDrive from './testdrive';

// const App = ({ width, height }) => <svg
// 	xmlns="http://www.w3.org/2000/svg"
// 	id="container"
// 	viewBox={`${0} ${0} ${width} ${height}`}>
// <TestDrive {...{ width, height }} />
const App = () => {
  return (
    <div id="container">
      <Chart />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

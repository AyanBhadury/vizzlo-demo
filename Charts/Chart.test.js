import React from "react";
import ReactDOM from "react-dom";
import Chart from "./Chart";
const Enzyme = require("enzyme");

describe("Chart", () => {
  it("should render chart component", () => {
    const wrapper = Enzyme.shallow(<Chart />);
  });
});

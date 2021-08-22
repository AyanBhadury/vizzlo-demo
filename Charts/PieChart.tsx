import React from 'react'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion'
import { data } from '../assets/data'

Charts(FusionCharts)
FusionTheme(FusionCharts)
FusionCharts.options.creditLabel = false;
const chartConfigs = {
    type: 'pie2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: data
};

function PieChart() {
    return (
        <>
            <ReactFC {...chartConfigs} />
        </>
    )
}

export default PieChart

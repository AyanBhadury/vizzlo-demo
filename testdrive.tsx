import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './Charts/BarChart'

export default class TestDrive extends React.PureComponent<{ width: number, height: number }, {}> {
    render() {
        return (
            // <g transform={`translate(${this.props.width / 2} ${this.props.height / 2})`}>
            //     <circle cx={0} cy={0} r={50} fill={'green'} />
            // </g>

            <BarChart />
        )
    }
}
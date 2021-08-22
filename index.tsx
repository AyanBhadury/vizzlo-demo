import React from 'react';
import ReactDOM from 'react-dom';
import BarChart from './Charts/BarChart';
import PieChart from './Charts/PieChart'
//import TestDrive from './testdrive';

// const App = ({ width, height }) => <svg
// 	xmlns="http://www.w3.org/2000/svg"
// 	id="container"
// 	viewBox={`${0} ${0} ${width} ${height}`}>
	// <TestDrive {...{ width, height }} />
    const App = ({ width, height })=> {
        return (
        <div id="container">
            <BarChart/>
            {/* <PieChart /> */}
        </div>
        )
    }  
// </svg>;

ReactDOM.render(<App width={1920} height={1080} />,
	document.getElementById('root'));


import React from "react";
import { Bar, Chart } from "react-chartjs-2";
import 'chart.js/auto'
import { getRelativePosition } from 'chart.js/helpers';
import { type } from "@testing-library/user-event/dist/type";

const BarChart =() => {
    return <div>
        <Bar 
            options={{
                // maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }}
            data ={{
                labels: ['RCB', 'MI', 'RR', 'SRH', 'CSK', 'KXIP', 'DD', 'DCH', 'GL', 'RPS', 'KKR'],
                datasets: [{
                    label: '# of toss wins',
                    data: [70, 85, 63, 35, 66, 68, 72, 43, 15, 6, 78],
                    backgroundColor: ['red', 'Blue', '#ff64dc', '#fc7404', 'yellow', 'red', '#000080', 'silver', 'gold', '#9400d3', 'purple' ],
                    borderColor:['black'],
                    borderWidth: 1
                },
                {
                label: '# of match wins',
                data: [73, 92, 63, 42, 79, 70, 62, 29, 13, 10, 77],
                backgroundColor: ['#C9920E', 'Blue', '#ff64dc', '#fc7404', 'yellow', 'lightgrey', '#000080', 'silver', 'gold', '#9400d3', 'purple' ],
                borderColor:['black'],
                borderWidth: 1
                }
            ]
                
            }}

        /></div>
};  

export default BarChart ;

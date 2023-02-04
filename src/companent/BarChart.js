import React from 'react'
import { Chart as ChartJS, 
        CategoryScale,
        LinearScale,
        BarElement,
        Title ,
        Tooltip,
        Legend} from "chart.js";

import {Bar} from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,BarElement,Title,Tooltip,Legend
)



const options ={
    responsive:true,
    Plugin:{
        Legend:{
            position:'top'
        },
        title:{
            display:true,
            text:"Naren"
        }
    }
}

const data = {
    labels:['jan','feb','mar'],
    datasets:[
        {
            label: 'present',
            data: [11,12,23],
            backgroundColor:'blue',
        },
        {
            label: 'absent',
            data: [1,2,3],
            backgroundColor:'red',
        }
    ]
}
export default function Chart() {
  return (
    <div style={{width:600, height:400}}>
    <Bar options={options} data={data}/>
    </div>
  );
}

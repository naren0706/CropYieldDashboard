import React from 'react'
import { Chart as Chartjs , ArcElement,Legend,Tooltip } from 'chart.js'
import { Pie } from 'react-chartjs-2'

Chartjs.register(ArcElement,Legend,Tooltip)

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
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderWidth:1,
    }]
  };

export default function PieChart() {
  return (
    <div>
        <Pie options={options} data={data}/>
    </div>
  )
}

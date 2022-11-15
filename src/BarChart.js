import React, { Component, useState } from "react";
import { Bar } from "react-chartjs-2";
// import { UserData } from './UserData.js';
import Chart from 'chart.js/auto';
import {faker} from '@faker-js/faker'

const UserData = [
    {
        id: 1,
        year: 2016,
        userGain: 1000,
        userLost: 823,
    },
    {
        id: 2,
        year: 2017,
        userGain: 2000,
        userLost: 345,
    },
    {
        id: 3,
        year: 2018,
        userGain: 300,
        userLost: 555,
    },
    {
        id: 4,
        year: 2019,
        userGain: 560,
        userLost: 4555,
    },
    {
        id: 5,
        year: 2020,
        userGain: 465,
        userLost: 234,
    },
]

const BarChart = () => {
    const [data, setData] = useState({
        labels: UserData.map(o => o.year),
        datasets: [
          {
            label: 'Users Gained',
            backgroundColor: 'rgba(0, 255, 0, 0.2)',
            borderColor: 'rgb(0, 255, 0)',
            borderWidth: 1,
            data: UserData.map(o => faker.datatype.number({ min: 0, max: 1000 }))
          },
          {
            label: 'Users Lost',
            backgroundColor: '#FBE0E3',
            borderColor: '#FBE0E3',
            borderWidth: 1,
            data: UserData.map(o => faker.datatype.number({ min: 0, max: 1000 }))
          }
        ]
      });

      const [options, setOptions] = useState({
        plugins: {
          title: {
            display: true,
            text: 'Bar Chart'
          }
        }
      })

  return (
    <Bar 
        data={data}
        options={options}
      />
  )
}

export default BarChart


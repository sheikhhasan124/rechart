import React from 'react';
import { Line, LineChart } from 'recharts';

const Rechart = () => {
    const data = [
        {
          name: 'suplier A',
          price: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'suplier B',
          price: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'suplier C',
          price: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'suplier D',
          price: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'suplier E',
          price: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'suplier F',
          price: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'suplier G',
          price: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];

    return (
      <LineChart width={400} height={400} data={data}>
          <Line dataKey={'price'}></Line>
      </LineChart>
    );
};

export default Rechart;
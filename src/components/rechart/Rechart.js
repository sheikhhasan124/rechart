import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Rechart = () => {
    const data = [
        {
          name: 'suplier A',
          price: 4000,
          salse: 2400,
          amt: 2400,
        },
        {
          name: 'suplier B',
          price: 3000,
          salse: 1398,
          amt: 2210,
        },
        {
          name: 'suplier C',
          price: 2000,
          salse: 9800,
          amt: 2290,
        },
        {
          name: 'suplier D',
          price: 2780,
          salse: 3908,
          amt: 2000,
        },
        {
          name: 'suplier E',
          price: 1890,
          salse: 4800,
          amt: 2181,
        },
        {
          name: 'suplier F',
          price: 2390,
          salse: 3800,
          amt: 2500,
        },
        {
          name: 'suplier G',
          price: 3490,
          salse: 4300,
          amt: 2100,
        },
      ];

    return (
      <LineChart width={600} height={400} data={data}>
          <Line dataKey={'price'}></Line>
          <Line dataKey={'salse'}></Line>
          <Tooltip />
          <XAxis dataKey={'name'} />
          <YAxis />
      </LineChart>
    );
};

export default Rechart;
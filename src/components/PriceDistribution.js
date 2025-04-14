import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PriceDistribution = ({ data }) => (
  <div>
    <h3>Price Distribution</h3>
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="priceRange" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  </div>
);

export default PriceDistribution;

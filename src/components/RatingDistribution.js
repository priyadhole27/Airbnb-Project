import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const RatingDistribution = ({ data }) => (
  <div>
    <h3>Rating Distribution</h3>
    <BarChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="rating" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#ffc658" />
    </BarChart>
  </div>
);

export default RatingDistribution;

import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const BedsDistribution = ({ data }) => (
  <div>
    <h3>Number of Beds Distribution</h3>
    <ScatterChart
      width={600}
      height={300}
      margin={{ top: 20, right: 20, bottom: 10, left: 10 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="numberOfBeds" name="Number of Beds" />
      <YAxis type="number" dataKey="count" name="Count" />
      <Tooltip cursor={{ strokeDasharray: "3 3" }} />
      <Legend />
      <Scatter name="Number of Beds" data={data} fill="#8884d8" />
    </ScatterChart>
  </div>
);

export default BedsDistribution;

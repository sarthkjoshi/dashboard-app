"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const LineCharts: React.FC<{ data: DashboardData }> = ({ data }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={430}
      className="border rounded-xl p-2 md:p-4  bg-white shadow-xl"
    >
      <LineChart width={600} height={300} data={data.visitors}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};
export default LineCharts;

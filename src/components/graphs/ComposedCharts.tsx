"use client";
import React from "react";
import {
  ComposedChart,
  Line,
  Bar,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ComposedCharts = ({ data }: { data: DashboardData }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={430}
      className="border rounded-xl p-2 md:p-4  bg-white shadow-xl"
    >
      <ComposedChart width={600} height={300} data={data.sales}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="amount" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedCharts;

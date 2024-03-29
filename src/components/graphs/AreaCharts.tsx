"use client";
import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function AreaCharts({ data }: { data: DashboardData }) {
  return (
    <ResponsiveContainer
      width="100%"
      height={430}
      className="border rounded-xl p-2 md:p-4  bg-white shadow-xl"
    >
      <AreaChart width={600} height={400} data={data.visitors}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="count" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

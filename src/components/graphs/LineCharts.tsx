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
export default function LineCharts({ data }: { data: DashboardData }) {
  return (
    <ResponsiveContainer
      width="100%"
      height={430}
      className="border rounded-xl p-2 md:p-4  bg-white shadow-xl"
    >
      <LineChart
        width={800}
        height={400}
        data={data.visitors}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

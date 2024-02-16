"use client";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function BarCharts({ data }: { data: DashboardData }) {
  return (
    <ResponsiveContainer
      width="100%"
      height={430}
      className="border rounded-xl p-2 md:p-4 shadow-xl bg-white"
    >
      <BarChart width={600} height={400} data={data.sales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

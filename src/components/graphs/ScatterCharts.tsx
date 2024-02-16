"use client";
import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ScatterCharts = ({ data }: { data: DashboardData }) => {
  return (
    <ResponsiveContainer
      width="100%"
      height={430}
      className="border rounded-xl p-2 md:p-4  bg-white shadow-xl"
    >
      <ScatterChart width={400} height={400}>
        <CartesianGrid />
        <XAxis dataKey="newUsers" type="number" name="New Users" />
        <YAxis dataKey="returningUsers" type="number" name="Returning Users" />
        <Tooltip cursor={{ strokeDasharray: "3 3" }} />
        <Legend />
        <Scatter name="User Activity" data={data.userActivity} fill="#8884d8" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default ScatterCharts;

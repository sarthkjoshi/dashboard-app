"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF"];
export default function PieCharts({ data }: { data: DashboardData }) {
  return (
    <ResponsiveContainer
      width="100%"
      height={500}
      className="border rounded-xl p-2 md:p-4  bg-white shadow-xl"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl">
          Distribution of sales among different products
        </h1>
        <PieChart width={400} height={400}>
          <Pie
            data={data.products}
            dataKey="sales"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.products.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend align="center" layout="vertical" verticalAlign="bottom" />
        </PieChart>
      </div>
    </ResponsiveContainer>
  );
}

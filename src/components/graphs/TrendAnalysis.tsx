"use client";
import React, { useState } from "react";
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

const TrendAnalysis: React.FC<{ data: DashboardData }> = ({ data }) => {
  const [startDate, setStartDate] = useState(data.visitors[0].date);
  const [endDate, setEndDate] = useState(
    data.visitors[data.visitors.length - 1].date
  );

  const filteredData = data.visitors.filter(
    (item) => item.date >= startDate && item.date <= endDate
  );

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-center font-bold text-xl">Trend Analysis</h2>
      <div className="flex flex-col md:flex-row text-center gap-2">
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <ResponsiveContainer
        width="100%"
        height={430}
        className="border rounded-xl p-2 md:p-4  bg-white shadow-xl"
      >
        <LineChart
          width={800}
          height={400}
          data={filteredData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            name="Visitors"
          />
          {/* Add other lines for additional metrics as needed */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendAnalysis;

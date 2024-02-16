import Card from "@/components/common/Card";
import AreaCharts from "@/components/graphs/AreaCharts";
import BarCharts from "@/components/graphs/BarCharts";
import fakeDashboardData from "@/Data";

import React from "react";
export default async function DashBoard() {
  const calculateTotalSales = (data: DashboardData): number => {
    return data.sales.reduce((total: number, sale) => total + sale.amount, 0);
  };

  const calculateTotalRevenue = (data: DashboardData): number => {
    return data.products.reduce(
      (total: number, product) => total + product.revenue,
      0
    );
  };

  const calculateTotalVisitors = (data: DashboardData): number => {
    return data.visitors.reduce(
      (total: number, visitor) => total + visitor.count,
      0
    );
  };

  const totalSales: number = calculateTotalSales(fakeDashboardData);
  const totalRevenue: number = calculateTotalRevenue(fakeDashboardData);
  const totalVisitors: number = calculateTotalVisitors(fakeDashboardData);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row mb-12 ">
        <div className="flex-1">
          <Card data={totalSales} label={"Total Sales"} icon={"rupee.svg"} />
        </div>
        <div className="flex-1">
          <Card
            data={totalRevenue}
            label={"Total Revenue"}
            icon={"activity.svg"}
          />
        </div>
        <div className="flex-1">
          <Card
            data={totalVisitors}
            label={"Total Visitors"}
            icon={"users.svg"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <AreaCharts data={fakeDashboardData} />
        <BarCharts data={fakeDashboardData} />
      </div>
    </div>
  );
}

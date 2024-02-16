import LineCharts from "@/components/graphs/LineCharts";
import React from "react";

import AreaCharts from "@/components/graphs/AreaCharts";
import BarCharts from "@/components/graphs/BarCharts";

import ScatterCharts from "@/components/graphs/ScatterCharts";
import PieCharts from "@/components/graphs/PieCharts";
import ComposedCharts from "@/components/graphs/ComposedCharts";
import fakeDashboardData from "@/Data";

export default async function page() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <PieCharts data={fakeDashboardData} />
      <LineCharts data={fakeDashboardData} />
      <AreaCharts data={fakeDashboardData} />
      <BarCharts data={fakeDashboardData} />

      <ScatterCharts data={fakeDashboardData} />
      <ComposedCharts data={fakeDashboardData} />
    </div>
  );
}

import TrendAnalysis from "@/components/graphs/TrendAnalysis";
import React from "react";
import fakeDashboardData from "@/Data";
export default function page() {
  return <TrendAnalysis data={fakeDashboardData} />;
}

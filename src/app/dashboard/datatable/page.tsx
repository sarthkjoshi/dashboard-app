import DataTable from "@/components/common/DataTable";
import fakeDashboardData from "@/Data";
import React from "react";

export default async function page() {
  return (
    <div>
      <DataTable data={fakeDashboardData} />
    </div>
  );
}

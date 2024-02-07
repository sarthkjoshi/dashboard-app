import Card from "@/components/common/Card";
import AreaCharts from "@/components/graphs/AreaCharts";
import BarCharts from "@/components/graphs/BarCharts";

import React from "react";

export default function DashBoard() {
  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row mb-12 ">
        <div className="flex-1">
          <Card
            data={
              "U.S. petroleum consumption is projected to remain below the 2005 level."
            }
            label={"Energy Consumption Projection"}
            icon={"/EnergySymbol.jpg"}
          />
        </div>
        <div className="flex-1">
          <Card
            data={
              "Reference case U.S. crude oil production is projected to recover from recent declines."
            }
            label={"Crude Oil Production Projection"}
            icon={"/OilBar.jpg"}
          />
        </div>
        <div className="flex-1">
          <Card
            data={
              "U.S. natural gas consumption is expected to increase during much of the projection period."
            }
            label={"Natural Gas Consumption Projection"}
            icon={"/GasFlame.jpg"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:flex-row">
        <AreaCharts />
        <BarCharts />
      </div>
    </div>
  );
}

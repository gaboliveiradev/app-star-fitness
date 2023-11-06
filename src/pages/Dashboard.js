import React from "react";
import StaticsInfoData from "../components/StaticsInfoData";
import GraphicArea from "../components/Charts/GraphicArea";
import GraphicColumn from '../components/Charts/GraphicColumn'
import PieChart from "../components/Charts/PieChart";

export default function Dashboard() {
  return (
    <section>
      <div>
        <h1 class="title">Dashboard</h1>
        <ul class="breadcrumbs">
          <li>
            <span>Home</span>
          </li>
          <li class="divider">/</li>
          <li>
            <span class="active">
              Dashboard
            </span>
          </li>
        </ul>
      </div>

      <div className="pt-[20px]">
        <StaticsInfoData />
      </div>
      <div className="pt-[80px] grid grid-cols-3 gap-6">
        
        {/*<GraphicArea />
        <GraphicColumn />
        <PieChart />*/}
      </div>
    </section>
  );
}

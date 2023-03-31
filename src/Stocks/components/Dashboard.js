import React, { useRef } from "react";
import { Line } from "react-chartjs-2";
import "./dashboard.css";
import {CategoryScale} from 'chart.js'; 

import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
function Dashboard({ price, data }) {
  const opts = {
    tooltips: {
      intersect: false,
      mode: "index"
    },
    responsive: true,
    maintainAspectRatio: false
  };
  if (price === "0.00") {
    return <h2>please select a currency pair</h2>;
  }
  return (
    <div className="dashboard">
      <div className="buySell">
        <h2>{`$${price}`}</h2>
        <h2>{<button className="btn">Buy</button>}</h2>
        <h2>{<button className="btn">Sell</button>}</h2>
        </div>

      <div className="chart-container" >
        <Line data={data} options={opts} />
      </div>
    </div>
  );
}

export default Dashboard;
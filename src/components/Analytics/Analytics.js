import React from "react";
import "./Analytics.css";
import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Sector,
  BarChart,
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Analytics = () => {
  const chartData = useLoaderData();
  // console.log(chartData);
  // const { name, total } = data;
  const data = chartData.data;
  console.log(data);
  return (
    <div className="">
      <h1 className="mt-5 underline">Analytics For Quiz Marks</h1>
      <div className="analytics row">
        <div className="col-lg-6 mt-5">
          <h3 className="underline">Line Analytics</h3>
          <ResponsiveContainer width="100%" aspect={3}>
            <LineChart width={500} height={500} data={data}>
              <Line type="monotone" dataKey="total" stroke="#82ca9d" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="col-lg-6 mt-5">
          <h3 className="underline">Bar Analytics</h3>
          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="total" fill="#8884d8" />
              <Bar dataKey="name" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

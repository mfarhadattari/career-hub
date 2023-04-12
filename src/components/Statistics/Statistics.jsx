import React, { useEffect, useState } from "react";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

const Statistics = () => {
  const [marks, setMarks] = useState([]);
  useEffect(() => {
    fetch("assignmentData.json")
      .then((res) => res.json())
      .then((data) => setMarks(data));
  }, []);
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-medium text-center">Assignment Analytics</h1>
      <div className="w-fit mx-auto mt-10">
        <AreaChart
          height={300}
          width={1000}
          data={marks}
          margin={{
            top: 10,
            right: 30,
            left: 10,
            bottom: 10,
          }}
        >
          <Area dataKey="mark" stroke="red" fill="#82ca9d"></Area>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip></Tooltip>
        </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;

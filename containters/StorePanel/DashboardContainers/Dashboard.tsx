import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useState } from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Dashboard = () => {
  const [chartOptions] = useState({
    chart: {
      fontFamily: "Vazirmatn",
      toolbar: {
        show: false,
      },
    },
    colors: ["#020122", "#F0386B"],
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    yaxis: {
      reversed: true,
      labels: {
        rotate: -90,
        offsetY: -30,
      },
    },
    xaxis: {
      categories: [
        "شنبه",
        "یکشنبه",
        "دوشنبه",
        "سه شنبه",
        "چهارشنبه",
        "پنجشنبه",
        "جمعه",
      ],
    },
    legend: {
      markers: {
        offsetX: 4,
        radius: 3,
      },
    },
    tooltip: {
      enabled: false,
    },
    title: {
      text: "از تاریخ 1 تا 7 فروردین",
      align: "center",
    },
  });

  const [chartSeries] = useState([
    {
      name: "رزروی ها",
      data: [30, 40, 45, 50, 49, 60, 70],
    },
    {
      name: "بیعانه دهندگان",
      data: [10, 14, 37, 22, 12, 55, 22],
    },
  ]);

  return (
    <Chart
      options={chartOptions}
      series={chartSeries}
      type="bar"
      width="100%"
    />
  );
};

export default Dashboard;

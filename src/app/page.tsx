"use client";
import { useState } from "react";

import DashboardBar from "../components/DashboardBar";
import DashboardContent from "../components/DashboardContent";

import useChart from "../hooks/use-chart";
import useFetch from "../hooks/use-fetch";

import { CovidData } from "./page.types";

const HomePage = () => {
  const [data, setData] = useState<CovidData>([]);

  useFetch(setData);

  useChart(data, "chart-container-deaths", "newDeaths28DaysByPublishDate", "New Deaths");

  useChart(data, "chart-container-cases", "newCasesByPublishDate", "New Cases");

  return (
    <>
      <DashboardBar />
      <DashboardContent />
    </>
  );
};
export default HomePage;

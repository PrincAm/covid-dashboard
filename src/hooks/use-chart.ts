import { useEffect } from "react";
import { Chart } from "@antv/g2";

import { CovidData, CovidDataRecord } from "../app/page.types";
import theme from '../theme/themeConfig';

const useChart = (
  data: CovidData,
  chartContainer: string,
  yParam: string,
  yTitle: string,
) => {
  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    const normData = data.filter(({ [yParam]: yParamValue, date }) => {
      const startDate = new Date("2022-12-31");
      const recordedDate = new Date(date);

      return (
        recordedDate > startDate &&
        typeof yParamValue === "number" &&
        yParamValue > 0
      );
    });

    const chart = new Chart({
      container: chartContainer,
    });

    chart.line().style({ shape: "smooth", stroke: theme?.token?.colorPrimary });

    chart.data(normData);

    chart.encode("x", (record: CovidDataRecord) => new Date(record.date));
    chart.encode("y", yParam);

    chart.axis("y", {
      title: yTitle,
    });

    chart.render();
  }, [data, chartContainer, yParam]);
};

export default useChart;

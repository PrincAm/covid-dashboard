import { useEffect, Dispatch, SetStateAction } from "react";

import { CovidData } from "../app/page.types";

const useFetch = (setData: Dispatch<SetStateAction<CovidData>>) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const baseUrl = 'https://api.coronavirus.data.gov.uk/v1/data';

        const url = new URL(baseUrl);
        const params = {
          'filters': 'areaName=England;areaType=nation',
          'structure': '{"date":"date","newCasesByPublishDate":"newCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate"}'
        };

        url.search = new URLSearchParams(params).toString();

        const response = await fetch(url.toString(), {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });


        if (response.ok) {
          const json = await response.json();
          const fetchedData = json.data;
          setData(fetchedData);
        } else {
          console.error(
            `Failed to fetch: ${response.status} ${response.statusText}`,
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [setData]);
};

export default useFetch;

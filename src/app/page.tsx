"use client";
import React, { useEffect, useState } from "react";
import { Button, Row, Col, Typography, Badge, Card } from "antd";
import {
  AlignLeftOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Chart } from "@antv/g2";
const { Title } = Typography;

const HorizontalBar = () => {
  const numOfNotes = 3;
  const numOfAppliedFilters = 10;
  return (
    <Row justify="space-between" align="middle" style={{ height: "70px" }}>
      <Col>
        <Title level={4}>Page Title</Title>
      </Col>
      <Col>
        <Button style={{ marginRight: "10px" }}>
          <span>Export to PDF</span>
          <DownloadOutlined />
        </Button>
        <Button style={{ marginRight: "10px" }}>
          <span>
            Notes <span style={{ color: "#bbbbbe" }}>({numOfNotes})</span>
          </span>
          <AlignLeftOutlined />
        </Button>
        <Button style={{ marginRight: "10px" }}>
          <span style={{ marginRight: "6px" }}>Filter</span>
          <Badge
            count={numOfAppliedFilters}
            overflowCount={9}
            style={{ fontSize: "10px", padding: 0 }}
          />
          <FilterOutlined />
        </Button>
      </Col>
    </Row>
  );
};

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const endpoint =
          'https://api.coronavirus.data.gov.uk/v1/data?filters=areaName=England;areaType=nation&structure={"date":"date","name":"areaName","code":"areaCode","newCasesByPublishDate":"newCasesByPublishDate","cumCasesByPublishDate":"cumCasesByPublishDate","newDeaths28DaysByPublishDate":"newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate":"cumDeaths28DaysByPublishDate"}';
        const response = await fetch(endpoint, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
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
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    const normData = data.filter(
        // @ts-ignore
        ({ newDeaths28DaysByPublishDate, date }) => {
          const startDate = new Date("2022-12-31");
          const recordedDate = new Date(date);

          return (recordedDate > startDate) && (newDeaths28DaysByPublishDate > 0);
        }
    );

    const chart = new Chart({
      container: "chart-container",
    });

    chart.line();

    chart.data(normData);

    // @ts-ignore
    chart.encode("x", (record) => new Date(record.date));
    chart.encode("y", "newDeaths28DaysByPublishDate");
    chart.style('shape', 'smooth');
    chart.render();
  }, [data]);

  useEffect(() => {
    if (data.length === 0) {
      return;
    }

    const normData2 = data.filter(
        // @ts-ignore
        ({ newCasesByPublishDate, date }) => {
          const startDate = new Date("2022-12-31");
          const recordedDate = new Date(date);

          return (recordedDate > startDate) && (newCasesByPublishDate > 0);
        }
    );

    const chart2 = new Chart({
      container: "chart-container2",
    });

    chart2.line();

    chart2.data(normData2);

    // @ts-ignore
    chart2.encode("x", (record) => new Date(record.date));
    chart2.encode("y", "newCasesByPublishDate");
    chart2.style('shape', 'smooth');

    chart2.render();
  }, [data]);

  return (
    <div>
      <HorizontalBar />
      <Row>
        <Col>
          <Card title="Chart Title" style={{ margin: "16px" }}>
            <div id="chart-container" />
          </Card>
        </Col>
        <Col>
          <Card title="Chart Title" style={{ margin: "16px" }}>
            <div id="chart-container2" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default HomePage;

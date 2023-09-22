import { CSSProperties, FC } from "react";
import { Badge, Button, Col, Row, Typography } from "antd";
import {
  AlignLeftOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";

import theme from "../theme/themeConfig";

const { Title } = Typography;

const buttonStyle: CSSProperties = {
  marginRight: "10px",
  fontWeight: 500,
  border: 0,
};

const iconStyle: CSSProperties = {
  color: theme?.token?.colorPrimary,
  fontSize: 18,
};

const buttonContentStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
};

const buttonTextStyle: CSSProperties = {
  display: "flex",
  marginRight: "6px",
};

const badgeStyle: CSSProperties = {
  fontSize: "8px",
  padding: 0,
  backgroundColor: theme?.token?.colorPrimary,
  marginRight: "6px",
  lineHeight: "16px",
  height: "16px",
  minWidth: "16px",
  borderRadius: "8px",
};

const notesStyle: CSSProperties = {
  color: "#bbbbbe",
  marginLeft: "2px",
};

const barStyle: CSSProperties = {
  height: "70px"
}

const DashboardBar: FC = () => {
  const numOfNotes: number = 3; // TODO load from state
  const numOfAppliedFilters: number = 10; // TODO load from state

  const handleButtonClick = () => console.log("click");

  return (
    <Row justify="space-between" align="middle" style={barStyle}>
      <Col>
        <Title level={5}>Page Title</Title>
      </Col>
      <Col>
        <Button style={buttonStyle} onClick={handleButtonClick}>
          <div style={buttonContentStyle}>
            <span style={buttonTextStyle}>Export to PDF</span>
            <DownloadOutlined style={iconStyle} />
          </div>
        </Button>
        <Button style={buttonStyle} onClick={handleButtonClick}>
          <div style={buttonContentStyle}>
            <span style={buttonTextStyle}>
              Notes
              <span style={notesStyle}>({numOfNotes})</span>
            </span>
            <AlignLeftOutlined style={iconStyle} />
          </div>
        </Button>
        <Button style={buttonStyle} onClick={handleButtonClick}>
          <div style={buttonContentStyle}>
            <span style={buttonTextStyle}>Filter</span>
            <Badge
              count={numOfAppliedFilters}
              overflowCount={9}
              style={badgeStyle}
            />
            <FilterOutlined style={iconStyle} />
          </div>
        </Button>
      </Col>
    </Row>
  );
};

export default DashboardBar;

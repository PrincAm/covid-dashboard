import { CSSProperties, FC } from "react";
import { Avatar, Card, Col, Row, Typography } from "antd";
import { BarsOutlined } from "@ant-design/icons";

const colStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "#bbbbbe",
};

const textStyle: CSSProperties = {
  color: "#bbbbbe",
  marginRight: "4px",
};

const iconStyle: CSSProperties = {
  fontSize: "24px",
};

const { Text } = Typography;

const CardFooter: FC = () => (
  <Row justify="space-between" align="middle">
    <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
    <Col style={colStyle}>
      <Text style={textStyle}>3</Text>
      <BarsOutlined style={iconStyle} />
    </Col>
  </Row>
);

const DashboardContent: FC = () => (
  <Row gutter={32}>
    <Col span={12}>
      <Card title="Chart Title">
        <div id="chart-container-deaths" />
        <CardFooter />
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Chart Title">
        <div id="chart-container-cases" />
        <CardFooter />
      </Card>
    </Col>
  </Row>
);

export default DashboardContent;

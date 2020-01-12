import React from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function HeaderComponent() {
  const { Header } = Layout;
  return (
    <Header style={{ height: "70px", width: "100%" }}>
      <Row>
        <Col span={6}>
          <Link to="/">
            <Button type="primary">LOGO</Button>
          </Link>
        </Col>
        <Col span={14}>col-6</Col>
        <Col span={2}>
          <a
            href="https://www.baidu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type="primary" shape="round">
              登录
            </Button>
          </a>
        </Col>
        <Col span={2}>
          <Button type="primary" shape="round">
            菜单
          </Button>
        </Col>
      </Row>
    </Header>
  );
}

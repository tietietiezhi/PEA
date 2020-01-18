import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { Row, Col } from "antd";
import { useTransition, animated, useSpring } from "react-spring";
import WordFlyAnWimation from "../../components/wordFlyAnimation/WordFlyAnimation";

import "antd/dist/antd.css";
import "../../index.css";
import "../../App.css";
import IconText from "../../components/iconText/IconText";
import ScaleInHorLeftText from "../../components/textAnimation/ScaleInHorLeft";

export default function Home() {
  const { Content } = Layout;

  return (
    <>
      <Content style={{ padding: "0 0" }}>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 24,
            minHeight: 380
          }}
        >
          <div>
            <h1
              style={{ textAlign: "center", color: "white", fontSize: "50px" }}
            >
              我们的优势
            </h1>
            <Row type="flex" justify="space-between" align="bottom">
              <Col span={3}></Col>
              <Col span={6}>
                <IconText title={"DIY课程"} subTitle={"全国首创"} />
              </Col>
              <Col span={6}>
                <IconText title={"社交大咖"} subTitle={"助你成为"} />
              </Col>
              <Col span={6}>
                <IconText title={"权威认证"} subTitle={"知名机构"} />
              </Col>
              <Col span={3}></Col>
            </Row>
          </div>
          <div style={{ margin: "200px 0 300px 0" }}>
            <Row type="flex" justify="space-between" align="bottom">
              <Col span={3}></Col>
              <Col span={6}>
                <IconText title={"持之以恒"} subTitle={"八年一日"} />
              </Col>
              <Col span={6}>
                <IconText title={"博大精深"} subTitle={"雄厚实力"} />
              </Col>
              <Col span={6}>
                <IconText title={"服务至微"} subTitle={"贴心关怀"} />
              </Col>
              <Col span={3}>
                <ScaleInHorLeftText fontSize={18} text={"注册报名"} />
              </Col>
            </Row>
          </div>
        </div>
      </Content>

      <WordFlyAnWimation />
    </>
  );
}

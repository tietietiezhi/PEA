import React from "react";
import { Layout } from "antd";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

export default function FooterComponent() {
  const { Footer } = Layout;
  return (
    <Footer style={{ padding: "0 0" }}>
      <div>
        <div
          style={{
            padding: "20px 0",
            fontSize: "16px",
            backgroundColor: "black"
          }}
        >
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Row>
                <Col span={5}>
                  <a>注册报名</a>
                </Col>
                <Col span={5}>
                  <a>选择课程</a>
                </Col>
                <Col span={5}>
                  <a>实习就业</a>
                </Col>
                <Col span={9} />
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
        <div
          style={{
            padding: "27px 0",
            fontSize: "14px",
            color: "white",
            backgroundColor: "grey"
          }}
        >
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <Row>
                <Col span={2}>
                  <Link to="/courseList">课程列表</Link>
                </Col>
                <Col span={2}>
                  <Link to="/courseCustomized">课程定制</Link>
                </Col>
                <Col span={2}>
                  <Link to="/AcademicStandard">学术标准</Link>
                </Col>
                <Col span={2}>
                  <Link to="/professorTeam">教授团队</Link>
                </Col>
                <Col span={3}>
                  <Link to="/transcript">成绩单及认证</Link>
                </Col>
                <Col span={2}>
                  <Link to="/tuition">学费标准</Link>
                </Col>
                <Col span={2}>
                  <Link to="/payment">支付方式</Link>
                </Col>
                <Col span={2}>
                  <Link to="/refund">退款政策</Link>
                </Col>
              </Row>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
        <div
          style={{
            fontSize: "14px",
            color: "white",
            backgroundColor: "grey"
          }}
        >
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <div
                style={{
                  padding: "27px 0",
                  border: "1px solid white",
                  borderLeft: "none",
                  borderRight: "none"
                }}
              >
                <Row>
                  <Col span={2}>
                    <Link to="/registration">报名流程</Link>
                  </Col>
                  <Col span={2}>
                    <Link to="/campusInfo">校区信息</Link>
                  </Col>
                  <Col span={2}>
                    <Link to="/dormInfo">住宿信息</Link>
                  </Col>
                  <Col span={2}>
                    <Link to="/importantTimeline">重要时间</Link>
                  </Col>
                  <Col span={2}>
                    <Link to="/transferCreditInfo">转学分指南</Link>
                  </Col>
                  <Col span={2}>
                    <Link to="/refund">退款政策</Link>
                  </Col>
                  <Col span={2}>
                    <Link to="/joinUs">PEA Career</Link>
                  </Col>
                  <Col span={2}>
                    <a>PEA义工</a>
                  </Col>
                  <Col span={2}>
                    <a>PEA留学</a>
                  </Col>
                  <Col span={2}>
                    <a>PEA Life</a>
                  </Col>
                  <Col span={2}>
                    <a>PEA auto</a>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
        <div
          style={{
            padding: "10px 0 35px 0",
            fontSize: "12px",
            color: "white",
            backgroundColor: "grey"
          }}
        >
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <span className="footer-margin">2019 PEA club</span>
              <span className="footer-margin">ICP备案19992999号-2</span>
              <span className="footer-margin">
                浙公网安备31010602003123129号
              </span>
              <span className="footer-margin">网络社会征信网</span>
              <span className="footer-margin">浙江网警网络110</span>
              <span className="footer-margin">浙江工商执政管理</span>
            </Col>
            <Col span={2}></Col>
          </Row>
          <Row>
            <Col span={2}></Col>
            <Col span={20}>
              <a
                href="https://www.baidu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-margin"
              >
                微信
              </a>
              <a
                href="https://www.baidu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-margin"
              >
                微博
              </a>
              <a
                href="https://www.baidu.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-margin"
              >
                淘宝
              </a>
              <span className="footer-margin">iss@peasummer.com</span>
              <span className="footer-margin">
                浙江省江干区艮山西路92号世茂天宸沿街底商7号
              </span>
            </Col>
            <Col span={2}></Col>
          </Row>
        </div>
      </div>
    </Footer>
  );
}

import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { Row, Col } from "antd";
import { useTransition, animated, useSpring } from "react-spring";

import "antd/dist/antd.css";
import "./index.css";
import "./App.css";
import FooterComponent from "./components/footer/FooterComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import Main from "./Main";

export default function App() {
  return (
    <Layout className="layout">
      <HeaderComponent />
      <Main />
      <FooterComponent />
    </Layout>
  );
}

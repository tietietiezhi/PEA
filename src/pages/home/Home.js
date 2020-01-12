import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import { Row, Col } from "antd";
import { useTransition, animated, useSpring } from "react-spring";

import "antd/dist/antd.css";
import "../../index.css";
import "../../App.css";

export default function Home() {
  const { Content } = Layout;
  const [translate, setTranslate] = useState(0);

  // const transitions = useTransition(translate, null, {
  //   from: { transform: "translate3d(0,-40px,0)" },
  //   // enter: { transform: "translate3d(0,0px,0)" },
  //   leave: { transform: "translate3d(0,-40px,0)" }
  // });

  const handleScroll = e => {
    console.log(e.deltaY);
    //   if (e.deltaY > 0) {
    //     setTranslate(useSpring({
    //       transform: "translate3d(40px,0,0)",
    //       from: { transform: "translate3d(200px,0,0)" },
    //       config: { duration: 2000 }));
    //   } else {
    //     useSpring({
    //       transform: "translate3d(40px,0,0)",
    //       from: { transform: "translate3d(200px,0,0)" },
    //       config: { duration: 2000 })
    //   }
  };

  const props = useSpring({
    transform: "translate3d(40px,0,0)",
    from: { transform: "translate3d(200px,0,0)" },
    config: { duration: 2000 }
  });

  return (
    <>
      <Content style={{ padding: "0 0" }} onWheel={e => handleScroll(e)}>
        <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
          Content
        </div>
      </Content>
      <div
        className="textConatiner"
        style={{ background: "#fff", minHeight: 380 }}
      >
        <animated.div className="text" style={props}>
          <p>diversity diversity diversity diversity diversity</p>
        </animated.div>
      </div>
    </>
  );
}

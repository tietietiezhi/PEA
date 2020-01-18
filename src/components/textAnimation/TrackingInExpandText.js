import React, { useState } from "react";
import "./TrackingInExpandText.css";

const TrackingInExpandText = props => {
  const [pressed, setPressed] = useState(0);
  const { fontSize, text } = props;

  const mouseEnterHanlder = () => {
    setPressed(pressed + 1);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <span
        key={pressed}
        onMouseEnter={mouseEnterHanlder}
        className="tracking-in-expand-fwd"
        style={{
          textAlign: "center",
          width: "auto",
          fontSize: `${fontSize}px`
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default TrackingInExpandText;

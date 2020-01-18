import React, { useState } from "react";
import "./ScaleInHorLeft.css";

const ScaleInHorLeftText = props => {
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
        className="scale-in-hor-left"
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

export default ScaleInHorLeftText;

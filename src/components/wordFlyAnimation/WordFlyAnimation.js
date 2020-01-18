import React from "react";
import ReactDOM from "react-dom";
import { useSpring, animated as a } from "react-spring";

import "./wordFlyAnimation.css";

const WordFlyAnWimation = () => {
  const [value1, setValue1] = React.useState(-50);
  const [value2, setValue2] = React.useState(-50);
  const contentProps = useSpring({
    whiteSpace: "nowrap",
    textAlign: "center",
    transform: `translate3d(${value1}%,0px,0)`,
    from: { transform: "translate3d(-50%,0px,0)" },
    config: { mass: 1, tension: 100, friction: 60, precision: 0.00001 }
  });
  const contentProps2 = useSpring({
    whiteSpace: "nowrap",
    textAlign: "center",
    transform: `translate3d(${value2}%,0px,0)`,
    from: { transform: "translate3d(-50%,0px,0)" },
    config: { mass: 1, tension: 100, friction: 60, precision: 0.00001 }
  });

  const onMouseWheel = e => {
    e.persist();
    if (e.deltaY > 0) {
      setValue1(value1 + 20);
      setValue2(value2 - 20);
    } else {
      setValue1(value1 - 20);
      setValue2(value2 + 20);
    }
  };
  return (
    <div className="container" onWheel={e => onMouseWheel(e)}>
      <a.div className="box" style={contentProps}>
        <h1 style={{ whiteSpace: "nowrap" }}>
          Not just your transfer credit specialist Not just your transfer credit
          specialist
        </h1>
      </a.div>
      <a.div className="box" style={contentProps2}>
        <h1>
          Not just your transfer credit specialist Not just your transfer credit
          specialist
        </h1>
      </a.div>
      <a.div className="box" style={contentProps}>
        <h1>
          Not just your transfer credit specialist Not just your transfer credit
          specialist
        </h1>
      </a.div>
    </div>
  );
};

export default WordFlyAnWimation;

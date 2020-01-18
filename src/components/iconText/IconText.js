import React from "react";
import "./IconText.css";

const IconText = props => (
  <div className="iconText-container">
    <h1 className="iconText-sub-title">{props.subTitle}</h1>
    <h1 className="iconText-title">{props.title}</h1>
    <img
      className="iconText-icon"
      src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1579202110065&di=7fbc9aa76409f7261037ada507777830&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F00%2F96%2F91%2F8256f30f4620b2b.jpg"
    />
    <div className="iconText-rect "></div>
  </div>
);

export default IconText;

import React from "react";
import "./button-box.style.scss";

const ButtonBox = ({ stl, content, type, onclick }) => (
  <button className={`btn ${stl ? stl : ""} `} type={type} onClick={onclick}>
    {content}
  </button>
);

export default ButtonBox;

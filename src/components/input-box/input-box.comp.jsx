import React from "react";
import "./input-box.style.scss";

const InputBox = ({ label, ...props }) => (
  <div className="input-box">
    <input {...props} placeholder={label} />
    <label htmlFor={props.name}>{label}</label>
  </div>
);

export default InputBox;

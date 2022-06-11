import React from "react";
import "./style.css";

const Switch = ({ onCheck, onchangeSwitch }) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" checked={onCheck} onChange={onchangeSwitch} />
        <span className="slider"></span>
      </label>
    </>
  );
};

export default Switch;

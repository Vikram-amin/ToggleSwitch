import React from "react";
import "./style.css";

const Switch = ({ isToggled, onToggle }) => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="slider"></span>
      </label>
    </>
  );
};

export default Switch;

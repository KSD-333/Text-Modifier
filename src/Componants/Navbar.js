import React from "react";
import propTypes from "prop-types";

export default function Navbar(props) {
  const  style = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#121212",
  };
  return (
    <div style={style}>
      <ul className="nav nav-tabs">
        <li className="nav-item" >
          <a className="nav-link active" style={style} aria-current="page" href="/" >
            {props.item1}
          </a>
        </li>

        {/* Toggle Button */}
        <div className="form-check form-switch" style={{ marginLeft: "auto", marginRight: "10px" }}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={props.toggleMode}
            checked={props.mode === "dark"}
          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            {props.mode === "light" ? "Enable Dark Mode" : "Disable Dark Mode"}
          </label>
        </div>
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  item1: propTypes.string.isRequired,
  toggleMode: propTypes.func.isRequired,
  mode: propTypes.string.isRequired,
};

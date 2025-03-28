import React, { useState } from "react";
import propTypes from "prop-types"
export default function Navbar(props) {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'grey';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }
    const modeToggle = () => {
        toggleMode();
    }
    
    return (
        <div className="container-fluid bg-gray text">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.item1}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        {props.item2}
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        {props.item3}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        {props.item4}
                    </a>
                </li>
                <div className="form-check form-switch " style={{ marginLeft: "auto", marginRight: "10px" }}>
                    <input className="form-check-input" value={toggleMode}  onChange={modeToggle} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>
            </ul>

        </div>
    );
}
Navbar.propTypes = {
    item1: propTypes.string,
    item2: propTypes.string,
    item3: propTypes.string,
    item4: propTypes.string
}



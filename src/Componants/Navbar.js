import React from "react";
import propTypes from "prop-types"
export default function Navbar(props) {
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">{props.Title}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        {props.Products}
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        { props.Contact}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                        {props.Feedback}
                    </a>
                </li>
            </ul>
        </div>
    );
}
Navbar.propTypes = {
    Title: propTypes.string,
    Products : propTypes.string,
    Contact : propTypes.string,
    Feedback : propTypes.string
}



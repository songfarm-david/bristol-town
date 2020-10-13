import React from 'react';
import { Link } from "gatsby"

import "./theme_button.scss";

export default function ThemeButton({ btnText = "Book your appointment now", btnTarget = "/contact/", className = "", target = "", type = "button"}) {
    // console.log(props);
    return (
        <button type={type} className={className + " theme_button"}>
            <Link to={btnTarget} target={target}>{ btnText }</Link>
        </button>
    )
}
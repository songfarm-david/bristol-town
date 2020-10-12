import React from 'react';
import { Link } from "gatsby"

import "./theme_button.scss";

export default function ThemeButton({ btnText = "Book your appointment now", btnTarget = "/contact/", className = "", target = ""}, style) {
    // console.log(props);
    return (
        <button type="button" className={className + " theme_button"} style={style}>
            <Link to={btnTarget} target={target}>{ btnText }</Link>
        </button>
    )
}
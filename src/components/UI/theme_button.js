import React from 'react';
import { Link } from "gatsby"

import "./theme_button.scss";

export default function ThemeButton({ btnText = "Book your appointment now", btnTarget = "/contact/", className = "", target = "", type = "button", style}) {
    
    // check if link is external
    let pattern = /^https?:\/\//i
    const isExternal = (pattern.test(btnTarget)) ? true : false

    return (
        <button type={type} className={className + " theme_button"} style={style}>
            {(isExternal) ? 
            <a href={btnTarget} target={target}>{btnText}</a> : 
            <Link to={btnTarget} target={target}>{ btnText }</Link>}
        </button>
    )
}
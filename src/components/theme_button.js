import React from 'react';
import { Link } from "gatsby"

import "./theme_button.scss";

export default function ThemeButton({ btnText = "Book your appointment now", btnTarget = "/contact/"}) {

    return (
        <button type="button" className="theme_button">
            <Link to={btnTarget}>{ btnText }</Link>
        </button>
    )
}
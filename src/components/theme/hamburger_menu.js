import React from "react";

import "./hamburger_menu.scss"

const Hamburger = ({ isActive }) => {

    const activeClass = ( isActive ) ? `is-active hamburger hamburger--squeeze` : `hamburger hamburger--squeeze`

    return (
        <button id="mobile_nav_btn" type="button" aria-label="Toggle mobile navigation" className={activeClass}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )
    
}

export default Hamburger
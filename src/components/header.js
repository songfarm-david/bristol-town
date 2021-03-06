import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"

import Nav from "./nav"
import Hamburger from "./theme/hamburger_menu"
import siteLogo from "../images/bristol_hair_logo.png";

import "./header.scss"

export default function Header() {

    // Declare a new state variable, which we'll call "count"
    const [isOpen, toggleIsOpen] = useState(false);
    const [isFloatingHeader, toggleFloatingHeader] = useState(false)

    useEffect(() => {
        const testScroll = () => (window.scrollY > 200) ? 
            toggleFloatingHeader(true)  : 
            toggleFloatingHeader(false)
        window.addEventListener('scroll', testScroll)
        return () => window.removeEventListener('scroll', testScroll)
    }, [])

    return (
        <header id={"main_header"} className={(isFloatingHeader) ? "floating_header" : ""}>
            <div className={"section_inner"}>
                <div className={"flex_inner"}>
                    <Link to="/">
                        <img src={siteLogo} alt={"Bristol Town Hair logo"} />
                        <h1 className="screen_reader_text">Bristol Town Hair</h1>
                    </Link>
                    <div role="button" tabIndex="0" onClick={() => toggleIsOpen( isOpen => !isOpen )} onKeyDown={() => toggleIsOpen( isOpen => !isOpen )}>
                        <Hamburger isActive={ isOpen } />
                        <Nav menuToggleClass={( isOpen ) ? 'menu-active' : ""} />
                    </div>
                </div>
            </div>
        </header>
    );
}
import React, { useState } from 'react';
import { Link } from "gatsby"

import Nav from "./nav"
import Hamburger from "./hamburger_menu"
import siteLogo from "../images/bristol_hair_logo.png";

export default function Header() {
    // Declare a new state variable, which we'll call "count"
    const [isOpen, toggleIsOpen] = useState(false);
    console.log(isOpen);
    return (
        <header id={"main_header"}>
            <div className={"section_inner"}>
                <div className={"flex_inner"}>
                    <Link to="/">
                        <img src={siteLogo} alt={"Bristol Town Hair logo"} />
                        <h1 className="screen_reader_text">Bristol Town Hair</h1>
                    </Link>
                    <div onClick={() => toggleIsOpen( isOpen => !isOpen )}>
                        <Hamburger isActive={ isOpen } />
                        <Nav menuToggleClass={( isOpen ) ? 'menu-active' : ""} />
                    </div>
                </div>
            </div>
        </header>
    );
}
import React from "react"
import { Link } from "gatsby"

// import "../style/nav.scss"

const Nav = ({ menuToggleClass }) => (
    <nav role="navigation" id="main_navigation" className={ menuToggleClass }>
        <h2 className="screen_reader_text">Main Navigation</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Make an Appointment</Link></li>
        </ul>
    </nav>
)

export default Nav
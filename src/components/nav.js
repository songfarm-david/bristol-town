import React from "react"
import { Link } from "gatsby"

const Nav = ({ menuToggleClass }) => (
    <nav role="navigation" id="main_navigation" className={ menuToggleClass }>
        <h2 className="screen_reader_text">Main Navigation</h2>
        <ul>
            <li><Link to="/services">Services</Link></li>
            <li><a href="https://my.matterport.com/show/?m=P8KFYtiK6J8" target="blank">Virtual Tour</a></li>
            <li><Link to="/contact">Make an Appointment</Link></li>
        </ul>
    </nav>
)

export default Nav
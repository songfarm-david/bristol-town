import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ menuToggleClass }) => (
    <nav role="navigation" id="main_navigation" className={ menuToggleClass }>
        <h2 className="screen_reader_text">Main Navigation</h2>
        <ul>
            <li><Link to="/services">Services</Link></li>
            {/* <li><a href="https://my.matterport.com/show/?m=P8KFYtiK6J8" target="blank">Virtual Tour</a></li> */}
            <li><Link to="/contact">Make an Appointment</Link></li>
            <a title="Call us" href="tel:+12504773098"><FontAwesomeIcon icon={faPhone} className="fa_icon" /></a>

        </ul>
    </nav>
)

export default Nav
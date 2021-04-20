import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ menuToggleClass }) => (
    <nav role="navigation" id="main_navigation" className={ menuToggleClass }>
        <h2 className="screen_reader_text">Main Navigation</h2>
        <ul>
            <li>
                <Link to="/services">Services</Link>
                {/* <ul>
                    <li><Link to="/hair-colouring">Hair Colouring</Link></li>
                </ul> */}
            </li>
            <li><Link to="/#imgGallery">Gallery</Link></li>
            <li><Link to="/contact">Make an Appointment</Link></li>
            <li><a title="Call us" href="tel:+12504773098" aria-label="call us"><FontAwesomeIcon icon={faPhone} className="fa_icon" /><span className="phone_number"> (250) 477-3098</span></a></li>
        </ul>
    </nav>
)

export default Nav
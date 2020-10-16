import React from "react"
import { Link } from "gatsby"

import siteLogo from "../images/bristol_hair_logo.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Footer () {
    return (
        <footer id="main_footer">
            <div className="section_inner">
                <h2 className="screen_reader_text">Footer</h2>
                <div className="flex_parent">
                    <div className="flex_child" id="brand_footer">
                        <img src={siteLogo} alt={"Bristol Town Hair logo"} />   
                        <p className="text_italic">Bristol Town Hair Fashions is the place to come if you want an amazing haircut that is the style you’ve always wanted. Look and feel your best, we service women, men and children.</p>
                    </div>
                    <div className="flex_child" id="icon_box__wrapper">
                        <div className="icon_box__box_container">
                            <div className="icon_box__icon_wrapper">
                                <FontAwesomeIcon icon={faPhone} className="fa_icon" />
                            </div>
                            <div className="icon_box__content">
                                <h3 className="icon_box__title">Call Us</h3>
                                <p className="icon_box__description"><a href="tel:+12504773098">(250) 477-3098</a></p>
                            </div>
                        </div>
                        <div className="icon_box__box_container">
                            <div className="icon_box__icon_wrapper">
                                <FontAwesomeIcon icon={faClock} className="fa_icon" />
                            </div>
                            <div className="icon_box__content">
                                <h3 className="icon_box__title">Our Hours</h3>
                                <p className="icon_box__description">08:00 AM - 5:00PM<br />
                                Monday - Saturday</p>
                            </div>
                        </div>
                        <div className="icon_box__box_container">
                            <div className="icon_box__icon_wrapper">
                                <i className="icon_box__icon"></i>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="fa_icon" />
        
                            </div>
                            <div className="icon_box__content">
                                <h3 className="icon_box__title">Address</h3>
                                <p className="icon_box__description">2562 Sinclair Road<br />
                                Victoria V8N 1B8</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex_child" id="main_footer_nav">
                        <h3 className="screen_reader_text">Footer Navigation</h3>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><a href="https://my.matterport.com/show/?m=P8KFYtiK6J8" target="blank">Virtual Tour</a></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><a href="https://www.facebook.com/bristoltownvictoria/" target="blank">Social Media</a></li>
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>
                <span id="copyright">© 2020 Bristol Town Hair in Cadboro Bay. Proudly designed by Ducks in a Row</span>
            </div>
        </footer>
    )
}
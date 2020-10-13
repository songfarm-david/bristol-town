import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

import "./backToTop.scss"

export default function BackToTop() {

    const [btnVisible, togglebtnVisible] = useState(false);
    useEffect(() => {
        const scrollTest = () => (window.scrollY > 200) ? 
            togglebtnVisible(true)  : 
            togglebtnVisible(false)
        window.addEventListener('scroll', scrollTest)
    }, [btnVisible])

    const scrollFunc = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button id="toTop" title="Back to top" 
            className={(btnVisible) ? "" : 'hidden'}
            onClick={scrollFunc}>                                     
            <FontAwesomeIcon icon={faArrowUp} className="fa_icon" />
        </button>
    )
}
import React from "react"
import "./page_banner.scss"

export default function PageBanner({ page, pageTitle }) {

    const bannerClass = (page.pathname === "/") ? 'full_height' : 'half_height'
    const str = page.pathname.replace(/\//g, '')

    return (
        <section id="page_banner" className={bannerClass + " " + str}>
            <div className="page_banner__headline_wrap">
                <h2 className="page_banner__headline">{pageTitle}</h2>
            </div>
            <div id="banner_overlay"></div>
        </section>
    )
}
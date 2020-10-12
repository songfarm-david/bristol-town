import React from "react"

import "./page_banner.scss"

export default function PageBanner({ page, pageTitle }) {
    console.log('pageBanner', page.pathname);

    const bannerClass = (page.pathname === "/") ? 'full_height' : 'half_height'
    const subString = page.pathname.substring(0,1)

    const str = page.pathname.replace(/\//g, '')

    return (
        <section id="page_banner" className={bannerClass + " " + str}>
            <div>
                <h2 className="page_banner__headline">{pageTitle}</h2>
            </div>
        </section>
    )
}
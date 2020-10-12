import React from "react"

import "./page_banner.scss"

export default function PageBanner({ page, pageTitle }) {
    console.log('pageBanner', page.pathname);

    const bannerClass = (page.pathname === "/") ? 'full_height' : 'half_height'
    return (
        <section id="page_banner" className={bannerClass}>
            <div>
                <h2 className="page_banner__headline">{pageTitle}</h2>
            </div>
        </section>
    )
}
import React from "react"

import Header from "./header"
import PageBanner from "../components/theme/page__banner"
import CtaBanner from "../components/theme/cta_banner"
import BackToTop from "../components/UI/backToTop"
import Footer from "./footer"

import "../styles/global.scss"

export default function Layout ({ children, page, pageTitle }) {

    return (
        <>
            <Header />
            <PageBanner pageTitle={"Welcome to Bristol"} page={page} pageTitle={pageTitle} />
            <main role="main">
                <div className="section_inner">
                    {children}
                </div>
            </main>
            <CtaBanner />
            <Footer />
            <BackToTop />
        </>
    )
    

}
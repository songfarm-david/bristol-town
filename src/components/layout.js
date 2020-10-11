import React from "react"

import Header from "./header"
import CtaBanner from "../components/cta_banner"
import Footer from "./footer"

import "../styles/global.scss"

export default function Layout ({ children }) {

    return (
        <>
            <Header />
            <main role="main">
                <div className="section_inner">
                    {children}
                </div>
            </main>
            <CtaBanner />
            <Footer />
        </>
    )
    

}
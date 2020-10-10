import React from "react"
import Header from "./header"
import Footer from "./footer"

import "../styles/global.scss"

export default function Layout ({ children }) {

    return (
        <>
            <Header />
            <main role="main">
                {children}
            </main>
            <Footer />
        </>
    )
    

}
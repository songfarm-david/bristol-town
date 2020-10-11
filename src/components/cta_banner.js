import React from 'react';

import ThemeButton from "../components/theme_button"

import "./cta_banner.scss";

export default function CtaBannner() {

    return (
        <section className="cta_banner">
            <div className="section_inner">
                <h2 className="cta_banner__headline">Your hair is in good hands with our specially-trained stylists</h2>
                <ThemeButton />
            </div>
        </section>
    )

}
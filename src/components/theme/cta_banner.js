import React from 'react';

import ThemeButton from "../UI/theme_button"

import "./cta_banner.scss";

export default function CtaBannner() {

    return (
        <section className="cta_banner ">
            <div className={"section_inner grid_section"}>
                <div className="">
                    <h2 className="cta_banner__headline">Your hair is in good hands with our specially-trained stylists</h2>
                    
                </div>
                <div className="button_group">
                 <ThemeButton className="outline" />
                </div>
            </div>
        </section>
    )

}
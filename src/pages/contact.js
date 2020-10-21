import React from "react"
import { graphql } from "gatsby"
import Map from "../components/UI/map"
import Layout from "../components/layout"
import ThemeButton from "../components/UI/theme_button"

import "../styles/form.scss"

export default function Services({location}) {

    return (
        <Layout page={location} pageTitle={"Contact Us"}>
            <p className="text_italic">Bristol Town Hair Fashions is the place to come if you want an amazing haircut that is the style you’ve always wanted. Look and feel your best, we service women, men and children.</p>
            <div className="grid_section">
                <section>
                    <h3>Make an appointment</h3>
                    <form method="POST" content-type="application/x-www-form-urlencoded" netlify-honeypot="bot-field" data-netlify="true" name="contact">
                        <input type="hidden" name="bot-field" />
                        <input type="hidden" name="form-name" value="contact" />
                        <label className="form_label" htmlFor="name">Name
                            <input type="input" name="name" aria-label="name" required />
                        </label>
                        <label className="form_label" htmlFor="email">Email
                            <input type="email" name="email" aria-label="email" required />
                        </label>
                        <label className="form_label" htmlFor="subject">Subject
                            <input type="input" name="subject" aria-label="subject" />
                        </label>
                        <label className="form_label">Message
                            <textarea rows="14" name="comment" aria-label="comment"></textarea>
                        </label>
                        <div id="captcha" data-netlify-recaptcha="true"></div>
                        <button type="submit" className="theme_button__form">Send</button>
                        {/* <ThemeButton className="center" type="submit" btnText="Send" /> */}
                    </form>
                </section>
                <article className="center">
                    <h4>Call us for more information</h4>
                    <p className="h3 sans_serif" style={{marginTop:'0'}}>(250) 477-3098</p>
                    <Map />
                    <div className="address_section">
                        <p className="align_left"><strong>Bristol Town Hair Fashions</strong><br />
                        2562 Sinclair Road<br />
                        Victoria V8N 1B8</p>
                    </div>
                </article>
            </div>
        </Layout>
    )
}

export const contactUs = graphql`
    query {
        file(name: {eq: "contact_us"}) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
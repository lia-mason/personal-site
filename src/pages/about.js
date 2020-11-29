import React from "react"
import Layout from "../components/layout"
import Lia from "../images/about-photo.jpeg"
import aboutStyles from "./about.module.scss"

const About = () => {
    return (
      <Layout>
        <h1>About Page</h1>
        <img src={Lia} alt="Headshot" className={aboutStyles.headshot}></img>
        <p>I'm in my third year of computer science at Queen's University, specializing in software design.
          I'm most interested in front-end development, UX & UI design, and technology for social impact!
        </p>
      </Layout>
    )
  }
  
  export default About
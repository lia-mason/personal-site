import React from "react"
import Layout from "../components/layout"
import Lia from "../images/hiking3.png"
import Lia2 from "../images/girl.png"
import aboutStyles from "./about.module.scss"
import Leaf from "../images/leaf.png"

const About = () => {
    return (
      <Layout>
        <div className={aboutStyles.container}>
          <h2>About me</h2>
          <img src={Leaf} alt="leaf" className={aboutStyles.emoji}></img>
        </div>
        <hr className={aboutStyles.underline}></hr>
        <div className={aboutStyles.imageContainer}>
          <img src={Lia} alt="Hiking" className={aboutStyles.headshot}></img>
          <img src={Lia2} alt="Headshot" className={aboutStyles.headshot}></img>
        </div>
        <p>I'm in my third year of computer science at Queen's University, specializing in software design.
          I'm most interested in front-end development, UX & UI design, and technology for social impact!
        </p>
      </Layout>
    )
  }
  
  export default About
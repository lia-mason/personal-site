import React from "react"
import Layout from "../components/layout"
import Lia from "../images/hike.png"
import Lia2 from "../images/headshot.png"
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
        <div className={aboutStyles.textContainer}>
          <p>I'm currently in my third year of computer science at Queen's University (Kingston, ON, Canada), specializing in software design.
            I'm most interested in front-end development, UX & UI design, and technology for social impact!
          </p>
          <p>Outside of tech, I love art (sketching / oil painting / digital drawing), karaoke, roadtrips, learning about psychology, and creating Spotify playlists.
          </p>
        </div>
      </Layout>
    )
  }
  
  export default About
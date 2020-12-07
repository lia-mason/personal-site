import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import Coffee from "../images/coffee.png"
import Pinterest from "../images/pinterest.svg"
import LinkedIn from "../images/linkedin-icon.svg"
import Github from "../images/github.svg"
import Mail from "../images/mail.svg"

const Contact = () => {
  return (
    <Layout>
      <div className={contactStyles.container}>
        <h2>Say hello</h2>
        <img src={Coffee} alt="Coffee" className={contactStyles.emoji}/>
      </div>
      <hr className={contactStyles.underline}/>
      <div className={contactStyles.textContainer}>
        <p className={contactStyles.text}>Let's connect :)</p>
        <a href="mailto:lia.k.mason@gmail.com">
        <img src={Mail} alt="Email" className={contactStyles.icon}></img>
        </a>
        <a href="https://www.linkedin.com/in/lia-k-mason/">
        <img src={LinkedIn} alt="Linked In" className={contactStyles.icon}></img>
        </a>
        <a href="https://github.com/lia-mason">
        <img src={Github} alt="Github" className={contactStyles.icon}></img>
        </a>
        <a href="https://www.pinterest.ca/liakmason/">
        <img src={Pinterest} alt="Pinterest" className={contactStyles.icon}></img>
        </a>
      </div>
      <div></div>
    </Layout>
  )
}

export default Contact
import React from "react"
import Layout from "../components/layout"
import contactStyles from "./contact.module.scss"
import Coffee from "../images/coffee.png"

const Contact = () => {
  return (
    <Layout>
      <div className={contactStyles.container}>
        <h2>Say Hello</h2>
        <img src={Coffee} alt="Coffee" className={contactStyles.coffee}/>
      </div>
      <hr className={contactStyles.underline}/>
      <p className={contactStyles.text}>Reach out to me to chat about anything :)</p>
      <div></div>
    </Layout>
  )
}

export default Contact
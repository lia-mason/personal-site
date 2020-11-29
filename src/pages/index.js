import React from "react"
import Layout from "../components/layout"
import Hero from "../images/heroImage.png"
import indexStyles from "./index.module.scss"
import Mindbridge from "../images/mindbridge-logo.png"

const Index = () => {
  return (
    <Layout>
      <div className={indexStyles.imageContainer}>
        <img src={Hero} alt="Hero" className={indexStyles.heroImage}/>
        <div className={indexStyles.topLeft}>
          <p className={indexStyles.subTitle}>Hi, my name is</p>
          <h1>Lia Mason</h1>
          <p className={indexStyles.subTitle}>I’m a third year software design student at Queen’s University in Ontario, Canada :)</p>
        </div>
      </div>
      <div className={indexStyles.pink}>
      <p className={indexStyles.workTitle}>Summer 2020</p>
      <hr color="#D35555"></hr>
      <p className={indexStyles.work}>I interned (remotely) at the startup MindBridge Ai as a junior software developer</p>
      <p className={indexStyles.work}>•  Contributed to the front end (Angular + TypeScript + HTML + CSS) and back end (Java) of the AI-powered auditor.</p>
      <img src={Mindbridge} alt="Mindbridge" className={indexStyles.logo}></img>
      </div>
    </Layout>
  )
}

export default Index

import React from "react"
import Layout from "../components/layout"
import Hero from "../images/heroImage.png"
import indexStyles from "./index.module.scss"

const Index = () => {
  return (
    <Layout>
      <div className={indexStyles.imageContainer}>
        <img src={Hero} alt="Hero Image" className={indexStyles.heroImage}/>
        <div className={indexStyles.topLeft}>
          <p className={indexStyles.subTitle}>Hi, my name is</p>
          <h1>Lia Mason</h1>
          <p className={indexStyles.subTitle}>I’m a third year software design student at Queen’s University in Ontario, Canada :)</p>
        </div>
      </div>
    </Layout>
  )
}

export default Index

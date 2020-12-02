import React from "react"
import Layout from "../components/layout"
import Hero from "../images/heroImage1.png"
import indexStyles from "./index.module.scss"
import Mindbridge from "../images/mindbridge-logo.png"
//import { useStaticQuery, graphql } from "gatsby"
//import Image from "gatsby-image"

const Index = () => {
  // const heroImage = useStaticQuery(graphql`
  //   {
  //     png: file(relativePath: { eq: "heroImage1" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 400) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     } 
  //   }
  // `)
  return (
    <Layout>
      <div className={indexStyles.imageContainer}>
         {/* <Image fluid={heroImage.childImageSharp.fluid}/> */}
          {/* <Image fluid={data.gradoFluidImage.childImageSharp.fluid} /> */}
          <div className={indexStyles.topLeft}>
              <div className={indexStyles.hContainer}>
              <p className={indexStyles.subTitle}>Hi, my name is</p>
              <h1>Lia</h1>
              <h1>Mason</h1>
              <p className={indexStyles.subTitle}>I’m a third year software design student at Queen’s University in Ontario, Canada :)</p>
              </div>
          </div>
          <div className={indexStyles.block}>
            <img src={Hero} alt="Hero" className={indexStyles.heroImage}/>
          </div>
      </div>
      <div className={indexStyles.pink}>
        <div className={indexStyles.text}>
          <p className={indexStyles.workTitle}>Summer 2020</p>
          <hr color="#D35555"></hr>
          <p className={indexStyles.work}>I interned (remotely) at the startup MindBridge Ai as a junior software developer</p>
          <p className={indexStyles.work}>•  Contributed to the front end (Angular + TypeScript + HTML + CSS) and back end (Java) of the AI-powered auditor.</p>
          <img src={Mindbridge} alt="Mindbridge" className={indexStyles.logo}></img>
        </div>
      </div>
    </Layout>
  )
}

export default Index

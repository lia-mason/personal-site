import React from "react"
import Layout from "../components/layout"
import Hero from "../images/heroImage1.png"
import HeroSmall from "../images/heroImageSmall.png"
import indexStyles from "./index.module.scss"
import Mindbridge from "../images/mindbridge-logo.png"
import Cucai from "../images/cucai.png"
import Loblaws from "../images/loblaw-logo.png"
import CBN from "../images/CBN-logo.png"
import Interns from "../images/interns.png"
import Qmind from "../images/QMIND-logo.png"

const Index = () => {
  return (
    <Layout>
      <div className={indexStyles.content}>
        <div className={indexStyles.imageContainer}>
            <div className={indexStyles.topLeft}>
                <div className={indexStyles.hContainer}>
                <p className={indexStyles.subTitle}>Hi, my name is</p>
                <h1>Lia</h1>
                <h1>Mason</h1>
                <p className={indexStyles.subTitle}>I’m a third year software design student at Queen’s University in Ontario, Canada :)</p>
                <img src={HeroSmall} alt="Hero" className={indexStyles.heroImageMobile}/>
                </div>
            </div>
            <div className={indexStyles.block}>
              <img src={Hero} alt="Hero" className={indexStyles.heroImage}/>
            </div>
        </div>
        <div className={indexStyles.pink}>
          <div className={indexStyles.text}>
            <p className={indexStyles.workTitle}>Summer 2020</p>
            <hr className={indexStyles.underline}></hr>
            <img src={Mindbridge} alt="Mindbridge" className={indexStyles.MB}></img>
            <p className={indexStyles.work}>I interned (remotely) at the startup MindBridge Ai as a junior software developer.</p>
            <p className={indexStyles.work}>•  Contributed to the front end (Angular + TypeScript + HTML + CSS) and back end (Java) of the AI-powered auditor.</p>
          </div>
          <div className={indexStyles.text}>
            <p className={indexStyles.workTitle}>Winter 2020</p>
            <hr className={indexStyles.underline}></hr>
            <img src={Loblaws} alt="Loblaws" className={indexStyles.loblaw}></img>
            <p className={indexStyles.work}>As a member of Queen’s University’s inQUbate cohort, I worked with Loblaw Digital to implement a machine learning recommendation system to personalize product listing pages on the Joe Fresh website.</p>
            <p className={indexStyles.work}>•  Pitched our project at the Canadian Undergraduate Conference on Artificial Intelligence</p>
            <img src={Cucai} alt="CUCAI" className={indexStyles.job}></img>
          </div>
          <div className={indexStyles.text}>
            <p className={indexStyles.workTitle}>Summer 2019</p>
            <hr className={indexStyles.underline}></hr>
            <img src={CBN} alt="CBN" className={indexStyles.CBN}></img>
            <p className={indexStyles.work}>I worked at Canadian Bank Note as a software intern.</p>
            <p className={indexStyles.work}>•  Wrote QA test scripts in Python and Java with Selenium</p>
            <img src={Interns} alt="Interns" className={indexStyles.job}></img>
          </div>
          <div className={indexStyles.text}>
            <p className={indexStyles.workTitle}>Extracurriculars</p>
            <hr className={indexStyles.underline}></hr>
            <img src={Qmind} alt="QMIND" className={indexStyles.qmind}></img>
            <p className={indexStyles.jobName}>Co-Chair of Women in QMIND</p>
            <p className={indexStyles.work}>QMIND is Queen’s 200+ member AI & ML organization.</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Index

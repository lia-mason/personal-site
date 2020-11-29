import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const resumePdf = useStaticQuery(graphql`
    {
      pdf: file(name: { eq: "resume" }) {
        name
        extension
        publicURL
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      <nav className={headerStyles.navContainer}>
        <ul className={headerStyles.navList}>
          <li>
            <Link to="/about/" activeClassName={headerStyles.activeMenuItem}>About</Link>
          </li>
          <li>
            <Link to="/contact/" activeClassName={headerStyles.activeMenuItem}>Contact</Link>
          </li>
          <li>
            <a href={resumePdf.pdf.publicURL}>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
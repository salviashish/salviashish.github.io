import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title,summary, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`
  let header = (
      <div>
        <Link className="header" to={`/`}>
        <h1 style={{ ...scale(0.70), margin:0}}>{ title }</h1>
        <span>{ summary }</span>
      </Link>
      <div className="navContainer">
        <div className="nav">
          <Link className="link" to='/blog'> Blog </Link> 
          <Link className="link"to='/about'> About </Link>
        </div>
        <div className="nav" style={{width:'125px'}}>
            <a target="_blank" rel="noreferrer" href='https://github.com/salviashish' className="link">GitHub</a> 
            <a target="_blank" rel="noreferrer" href='https://twitter.com/ashishsalvi' className="link">Twitter</a>
        </div>
      </div>
      </div>
    )
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(40),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <hr/>
      <div>
      <main>{children}</main>
      </div>
      <hr/>
      <footer>
        <div style={{
          display:`flex`,
          flexDirection: `row`,
          justifyContent:`space-between`,
          alignItems:`center`
        }}>
          <span>© {new Date().getFullYear()} by Ashish Salvi.</span>
          <span>Built with <a className="link" href="https://www.gatsbyjs.org">Gatsby</a></span>
        </div>
      </footer>
    </div>
  )
}

export default Layout

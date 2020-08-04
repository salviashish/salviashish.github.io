// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {FixedObject } from "gatsby-image"

type Data = {
  avatar: {
    childImageSharp:{
      fixed:FixedObject
    }
  }
  site: {
    siteMetadata: {
      title: string
      siteSummary: string,
      author: {
        name:string
      }
    }
  }
}

const AboutPage = ({ data, location }: PageProps<Data>) => {
  const {title,siteSummary,author} = data.site.siteMetadata;

  return (
    <Layout location={location} title={title} summary={siteSummary}>
      <SEO title="About" />
      <div className="title"><h2> About </h2></div>
      <section>
        <p>
          Hey there!
        </p>
        <p>
          Welcome to my blog. I've worked over a decade in the IT industry and specialized in building enterprise-grade web applications. 
          Primarily I've been a .Net Developer, however now expanding my technology perimeter to deep dive more into Front-end & Cloud engineering world.
        </p>
        <p>
          Using this medium, I'll share to the best of my knowledge artifacts (articles / how-to tutorials) on .Net programming / Software Architecture or Application design patterns / 
          my journey on Front-end & Clould Engineering.
        </p>
        <p>
          Stay Tuned!<br/>
          AKS
        </p>
      </section>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageQuery{
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
        }
        title
        siteSummary
      }
    }
  }
`
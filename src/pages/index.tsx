// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

type Data = {
  site: {
    siteMetadata: {
      siteTitle: string
      siteSummary: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const {siteTitle,siteSummary} = data.site.siteMetadata
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle} summary={siteSummary}>
      <SEO title="Home" />
      <div className="title" style={{width:`100%`,alignContent:'center'}}>
        <h2> Latest Posts</h2>
        <Link className="link" style={{marginTop:'3.5rem',height:'35px'}} to="/blog">Read all posts</Link>
      </div>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <header>
                <h3 style={{ marginBottom: rhythm(1 / 4),}}
                >
                  <Link className="link" style={{ boxShadow: `none` }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small style={{
                  color:`#92a3ab`,
                  textTransform:`uppercase`
                }}>
                  {node.frontmatter.date} | {node.fields.readingTime.text}
                </small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
          )
        })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        siteTitle
        siteSummary
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC },limit:3) {
      edges {
        node {
          excerpt
          fields {
            slug
            readingTime{
              text
            }
          }
          frontmatter {
            date(formatString: "DD MMM YYYY")
            title
            description
          }
        }
      }
    }
  }
`
import React from "react"
import { Link, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const {title, siteSummary } = data.site.siteMetadata
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={title} summary={siteSummary}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="title" style={{width:`100%`,marginTop:'3.5rem'}}>
      </div>
      <article>
        <header>
          <h1 style={{ marginTop: rhythm(1), marginBottom: 0,}}>
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              color:`#92a3ab`,
              textTransform:`uppercase`
            }}
          >
            {post.frontmatter.date} | {' '}
            {post.fields.readingTime.text} 
            {/* | {' '} placeholder to populate tags */}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>

      <nav>
        <ul style={{ display: `flex`, flexWrap: `wrap`, justifyContent: `space-between`, listStyle: `none`, padding: 0,}}>
          <li>
            {previous && (
              <Link className="link" to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link className="link" to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title,
        siteSummary
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        description
      }
      fields{
        slug
        readingTime{
          text
        }
      }
    }
  }
`

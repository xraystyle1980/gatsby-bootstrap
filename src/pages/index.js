import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'

import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'

const HomeLanding = ({ data, location }) => {
  const posts = get(data, 'remark.posts')
  return (
    <Layout location={location}>
      <Meta site={get(data, 'site.meta')} />


      <section className="text-center">
        <div className="container">
          <img src="//source.unsplash.com/collection/1163637/480x480
"/>
          <h1>jaxx2104</h1>
          <p className="lead text-muted">Front-end engineer.</p>
          <div>
            <a
              ref="twButton"
              href="https://twitter.com/jaxx2104"
              className="twitter-follow-button"
              data-show-count="false"
            >
              Follow @jaxx2104
            </a>
          </div>
        </div>
      </section>



    </Layout>
  )
}

export default HomeLanding

export const pageQuery = graphql`
  query IndexQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
        twitter
        adsense
      }
    }
    remark: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      posts: edges {
        post: node {
          html
          frontmatter {
            layout
            title
            path
            category
            tags
            description
            date(formatString: "YYYY/MM/DD")
            image {
              childImageSharp {
                fixed(width: 500) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

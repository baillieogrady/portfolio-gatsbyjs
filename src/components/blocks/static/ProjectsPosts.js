import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ProjectsPosts = () => (
  <StaticQuery
    query={graphql`
      query ProjectsPosts {
        allWordpressWpProjects(limit: 2) {
          edges {
            node {
              id
              slug
              title
              content
              acf {
                url
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="flex-ns justify-between flex-wrap">
        {data.allWordpressWpProjects.edges.map((edge, i) => (
          <article className={`w-100 w-50-m w-50-l pb4 pb5-ns ${i === 0 ? 'pr3-ns' : 'pl3-ns'}`} key={edge.node.slug}>
            <Img fluid={edge.node.featured_media.localFile.childImageSharp.fluid} />
            <h3 className="mv3">
              <a
                className="white no-underline box-shadow-none"
                href={edge.node.acf.url}
                target="_blank"
                rel="noopener"
                dangerouslySetInnerHTML={{ __html: edge.node.title }} />
            </h3>
            <div dangerouslySetInnerHTML={{ __html: edge.node.content }} />
          </article>
        ))}
      </div>
    )}
  />
)

export default ProjectsPosts
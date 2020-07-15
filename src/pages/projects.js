import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ProjectsCats from '../components/ProjectsCats'
import ProjectsIntro from '../components/ProjectsIntro'


export const Projects = ({ data }) => {
  return (
    <Layout>
      <Helmet title={`Projects - Baillie O'Grady`} />
      <ProjectsIntro />
      <div className="posts mw8 center ph3 flex flex-wrap justify-between">
        {data.allWordpressWpProjects.edges.map((edge, i) => (
          <div className={i === 0 || i % 2 === 0 ? "mb4 mb5-ns w-100 w-50-ns pr3-m pr3-l" : "mb4 mb5-ns w-100 w-50-ns pl3-m pl3-l"} key={edge.node.id}>
            <article>
              <a href={edge.node.acf.url} target="_blank" rel="no opener" rel="noreferrer">
                <Img fluid={edge.node.featured_media.localFile.childImageSharp.fluid} key={edge.node.id} />
              </a>
              <ProjectsCats cats={edge.node.project_category} />
              <header>
                <h2 className="entry-title mb3 f4 f3-ns fw6">{edge.node.title}</h2>
              </header>
              <div className="mt3">
                <div dangerouslySetInnerHTML={{ __html: edge.node.content }} />
              </div>
              <div>
                <a href={edge.node.acf.url} target="_blank" className="bg-blue f7  fw7 pv2  ph3 ttu white tracked br2 box-shadow-none dim">Visit</a>
                {edge.node.acf.code && edge.node.acf.code.length ? (
                  <a href={edge.node.acf.code} target="_blank" className="ml2 bg-dark-gray f7  fw7 pv2  ph3  white tracked br2 box-shadow-none dim">Code</a>
                ) : null}
              </div>
            </article>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
query {
  allWordpressWpProjects {
    edges {
      node {
        acf {
          code
          url
        }
        title
        content
        id
        project_category
        featured_media {
          source_url
          localFile {
            childImageSharp {
              fluid(maxWidth: 800){
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          wordpress_id
        }
      }
    }
  }
}
`
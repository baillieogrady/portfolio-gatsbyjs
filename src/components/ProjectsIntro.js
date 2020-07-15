import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const ProjectsIntro = () => (
  <StaticQuery
    query={graphql`
          query {
            allWordpressAcfOptions {
              edges {
                node {
                  options {
                    projects_heading
                    projects_text
                  }
                }
              }
            }
          }
        `}
    render={data => (
      <section className="intro mb4 mb5-ns">
        <div className="mw8 center ph3 cf">
          <div className="fl w-100 w-70-ns">
            <h1>
              {data.allWordpressAcfOptions.edges[0].node.options.projects_heading}
            </h1>
            <div>
              <p>
                {data.allWordpressAcfOptions.edges[0].node.options.projects_text}
              </p>
            </div>
          </div>
        </div>
      </section>
    )}
  />
)

export default ProjectsIntro
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const ProjectsCats = ( { cats } ) => (
    <StaticQuery
        query={graphql`
          query {
            allWordpressWpProjectCategory {
              edges {
                node {
                  wordpress_id
                  slug
                }
              }
            }
          }
        `}
        render={data => (
            <div className="list pa0 ma0 mt2">
                {data.allWordpressWpProjectCategory.edges.map(edge => (
                    <div className="dib mv2" key={edge.node.wordpress_id}>
                        {cats.map(cat => (
                            cat === edge.node.wordpress_id ? <span className="dib pv1 ph2 bg-near-white mr2 br1 f7 ttu tracked" key={edge.node.slug}> {edge.node.slug.replace('-', ' ')} </span> : null
                        ))}
                    </div>
                ))}
            </div>
        )}
    />
)

export default ProjectsCats



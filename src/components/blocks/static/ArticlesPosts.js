
import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const ArticlesPosts = () => (
  <StaticQuery
    query={graphql`
          query {
            allWordpressPost(limit: 6) {
              edges {
                node {
                  title
                  date(formatString: "Do MMMM YYYY")
                  slug
                }
              }
            }
          }
          
        `}
    render={data => (
      <div className="flex flex-wrap justify-between">
        {data.allWordpressPost.edges.map(edge => (
          <article className="w-100 w-50-l mb3 mb4-m mb5-ns" key={edge.node.slug}>
            <Link
              to={`/${edge.node.slug}`}
              className="db overflow-hidden"
            >
            </Link>
            <p>
              <Link
                to={`/${edge.node.slug}`}
                className="no-underline"
                dangerouslySetInnerHTML={{ __html: edge.node.title }}
              >
              </Link>
              <span className="silver f7 db" dangerouslySetInnerHTML={{ __html: edge.node.date }} />
            </p>
          </article>
        ))}
      </div>
    )}
  />
)

export default ArticlesPosts
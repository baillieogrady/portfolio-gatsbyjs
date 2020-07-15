import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

const MenuItems = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressMenusMenusItems {
          edges {
            node {
              items {
                url
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {data.allWordpressMenusMenusItems.edges[0].node.items.map(edge => (
          <li key={edge.url}>
            <Link
              className="ttu fw7"
              to={`/${edge.url.replace('https://localhost:8000', '')}`}
            >
              {edge.title}
            </Link>
          </li>
        ))}
      </ul>
    )}
  />
)

export default MenuItems